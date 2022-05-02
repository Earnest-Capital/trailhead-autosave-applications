
// get form and create variable
//const autoSaveForm = document.querySelector('[name="wf-form-autosave"]');



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
            "slug":"6267225802b4611caf989c91",
            "name":"Michael Test Form2"
            })
    };

    return fetch("https://v1.nocodeapi.com/calmfund/webflow/MMyYDBnQutlUhsQz?itemId=6267225802b4611caf989c91?live=true", requestOptions)
    .then(response => response.json())

}


function favoriteApplication(fieldSelector, validateFieldFn, webflowField, messageResultSelector) {
    const field = document.querySelector(fieldSelector);
    console.log(field.checked);

    field.addEventListener('input', function() {
        document.querySelector(messageResultSelector).innerHTML = "";
    });


    field.addEventListener('change', function() {
        if (typeof(validateFieldFn) === "function") {
          const validateResult = validateFieldFn(field.checked);
          if (validateResult !== true) {
              // update error message with validate result
              document.querySelector(messageResultSelector).innerHTML= validateResult;
              return
          }
        
        }
        // update airtable & message with result
      /*  updateAirtable(airtableField, field.value)
        .then(function (result) {
            console.log('saved field in Airtable', airtableField, result);
            //document.querySelector(messageResultSelector).innerHTML = 'Saved!';
        })
        .catch(function (error) {
            console.error('did not save field in Airtable', airtableField, error);
            //document.querySelector(messageResultSelector).innerHTML = `Oops, did not save: ${error.message}`;
        });
      */

        updateWebflow(webflowField,field.checked)
        .then(function (result) {
            console.log('saved field in Webflow', webflowField, result);
            document.querySelector(messageResultSelector).innerHTML = 'Saved!';
        })
        .catch(function (error) {
            console.error('did not save field in Webflow', webflowField, error);
            document.querySelector(messageResultSelector).innerHTML = `Oops, did not save: ${error.message}`;
        });
    });
}


favoriteApplication("#favorite", null,"favorite", "#messageresult-favorite");


function verifyUrl (fieldSelector) {
    
    const fieldUrl = document.querySelector(fieldSelector);
    fieldUrl.addEventListener('change', function() {
        
        const validateResult = fieldUrl.checked;
        console.log(validateResult);
    });
}
    verifyUrl("#favorite2");

