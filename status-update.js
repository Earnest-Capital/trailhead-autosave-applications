// get form and create variable
//const autoSaveForm = document.querySelector('[name="wf-form-autosave"]');

// create function to validate and require plain text field to not be empty
function validateName(inputText) {
    if (inputText === "") {
        return 'Field must be filled out, cannot be blank.';
    }
    return true;
}

// create function to verify email is properly formatted
function validateEmail(inputEmail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail))
  {
    return (true)
  }
    return 'You have entered an invalid email address! Please fix it'
}

// create function to verify URL is properly formatted
function validateUrl(inputUrl)
{
  regexp = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
        if (regexp.test(inputUrl))
        {
          return true;
        }
        else
        {
          return 'You have entered an invalid url address! Please fix it';
        }
}



// create function to update airtable
function updateAirtable(airtableFieldName, airtableFieldValue) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: "put",
        headers: myHeaders,
        redirect: "follow",
        body: JSON.stringify([{
            "id": "recuT2qIfkUTxaZ1P", "fields": {

                [airtableFieldName]: airtableFieldValue


            }
        }])
    };

    return fetch("https://v1.nocodeapi.com/calmfund/airtable/oJjfgEDDJpdPyIkN?tableName=tblW9zsxLUkxaWISX", requestOptions)
        .then(response => response.json())

}

// create function to update Weblfow

function updateWebflow(webflowFieldName, webflowFieldValue) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: "put",
        headers: myHeaders,
        redirect: "follow",
        body: JSON.stringify({
            [webflowFieldName]:webflowFieldValue,
            "_archived":false,
            "_draft":false,
            "slug":"621e8ce58d800d6d630310f0"
            })
    };

    return fetch("https://v1.nocodeapi.com/calmfund/webflow/MMyYDBnQutlUhsQz?itemId=621e8ce58d800d6d630310f0&live=true", requestOptions)
    .then(response => response.json())

}





setupAutosaveField("#name", validateName, "Company","name", "#namemessageresult");
//setupAutosaveField("email", validateEmail, "Email", "#namemessageresultemail", "#wf-form-autosave");
//setupAutosaveField("companyurl", validateUrl, "Company URL", "#namemessageresulturl", "#wf-form-autosave");
//autosaveField("somethingelse", null, "Something Else", "somethingelsemssageresult")


function Emptyvalidation(inputtxt, emailtxt, messageResultSelector)
      {
        var fieldCheck = document.querySelector(inputtxt);
        
        var emailCheck = document.querySelector(emailtxt);
        
 if (!fieldCheck.value || !emailCheck.value) 
      {
        document.querySelector(messageResultSelector).innerHTML= "Incomplete";
 
      }
 else
      {
        document.querySelector(messageResultSelector).innerHTML= "Complete";
      }
 
      }




function setupAutosaveField(fieldSelector, validateFieldFn, airtableField, webflowField, messageResultSelector) {
    const field = document.querySelector(fieldSelector);

    field.addEventListener('input', function() {
        document.querySelector(messageResultSelector).innerHTML = "";
    });


    field.addEventListener('blur', function() {
        if (typeof(validateFieldFn) === "function") {
          const validateResult = validateFieldFn(field.value);
          if (validateResult !== true) {
              // update error message with validate result
              document.querySelector(messageResultSelector).innerHTML= validateResult;
              return
          }
        
        }
        // update airtable & message with result
        updateAirtable(airtableField, field.value)
        .then(function (result) {
            console.log('saved field in Airtable', airtableField, result);
            //document.querySelector(messageResultSelector).innerHTML = 'Saved!';
        })
        .catch(function (error) {
            console.error('did not save field in Airtable', airtableField, error);
            //document.querySelector(messageResultSelector).innerHTML = `Oops, did not save: ${error.message}`;
        });


        updateWebflow(webflowField,field.value)
        .then(function (result) {
            console.log('saved field in Webflow', webflowField, result);
            document.querySelector(messageResultSelector).innerHTML = 'Saved!';
        })
        .catch(function (error) {
            console.error('did not save field in Webflow', webflowField, error);
            document.querySelector(messageResultSelector).innerHTML = `Oops, did not save: ${error.message}`;
        });
    
    
    
        Emptyvalidation("#name", "#companyurl", "#status-text");
    
    });


   
    

}

Emptyvalidation("#name", "#companyurl", "#status-text");