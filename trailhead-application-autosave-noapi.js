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

function setupAutosaveField(fieldSelector, validateFieldFn, airtableField, webflowField, messageResultSelector) {
    const field = document.querySelector(fieldSelector);
    console.log(field.value);

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
    });
}

//details for each field
// (fieldSelector, validateFieldFn, airtableField, webflowField, messageResultSelector)

// fieldSelector = field id

// validateFieldFn = validate function to use or input null if not using a valiadate function

// airtableField = exact value of the airtable field

// webflowField = exact value of the Webflow field (Looks like a slug)

// messageResultSelector = id of the message text field


//details for each field
// (fieldSelector, validateFieldFn, airtableField, webflowField, messageResultSelector)

// fieldSelector = field id

// validateFieldFn = validate function to use or input null if not using a valiadate function

// airtableField = exact value of the airtable field

// webflowField = exact value of the Webflow field (Looks like a slug)

// messageResultSelector = id of the message text field

// set parameters for each input field

// product & value proposition
setupAutosaveField("#Tagline", validateName, "Tagline","tagline", "#messageresult-tagline");
setupAutosaveField("#Business-Model", validateName, "Business Model","business-model", "#messageresult-business-model");
setupAutosaveField("#demo-screencast-link", validateUrl, "Demo Screencast","demo-screencast", "#messageresult-demo-screencast");
setupAutosaveField("#deck-link", validateUrl, "Memo/Deck Link","deck-link", "#messageresult-deck-link");
setupAutosaveField("#Is-your-product-live-in-the-market", validateName, "Is your product live in the market?","is-your-product-live-in-the-market", "#messageresult-is-your-product-live-in-the-market");
setupAutosaveField("#referrer", null, "Referred by","referred-by", "#messageresult-referred-by");

// traction & metrics
setupAutosaveField("#Key-Metrics", validateName, "Key Metrics","key-metrics", "#messageresult-key-metrics");

// my team
setupAutosaveField("#Founder-Team-Background", validateName, "Founder & Team Background","founder-team-background", "#messageresult-founder-team-background");
setupAutosaveField("#Unfair-Advantage", validateName, "Unfair Advantage","unfair-advantage", "#messageresult-unfair-advantage");
setupAutosaveField("#Links-To-Your-Work", null, "Links to your work","links-to-your-work", "#messageresult-links-to-your-work");

// pricing & customers
setupAutosaveField("#Market-Size", null, "Market Size","market-size", "#messageresult-market-size");
setupAutosaveField("#Average-Revenue-per-Customer", null, "Average Revenue per Customer","average-revenue-per-customer", "#messageresult-average-revenue-per-customer");
setupAutosaveField("#Pricing-Model", validateName, "Pricing Model","pricing-model", "#messageresult-pricing-model");

// competition
setupAutosaveField("#Competition-Positioning", validateName, "Competition & Positioning","competition-positioning", "#messageresult-competition-positioning");

// funraising
setupAutosaveField("#Why-Rise-Capital", validateName, "Why are you raising capital","why-are-you-raising-capital", "#messageresult-why-are-you-raising-capital");
setupAutosaveField("#Capital-Raising", validateName, "Capital Raising","capital-raising", "#messageresult-capital-raising");
setupAutosaveField("#Round-Process", validateName, "Round / Process","round-process", "#messageresult-round-process");
setupAutosaveField("#Previous-Capital-Raised", validateName, "Previous Capital Raised","previous-capital-raised", "#messageresult-previous-capital-raised");
setupAutosaveField("#Capital-Legal-Name", null, "Company Legal Name","company-legal-name", "#messageresult-company-legal-name");

