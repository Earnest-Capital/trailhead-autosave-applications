
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
    return 'You have entered an invalid email address! Please fix it.'
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
          return 'You have entered an invalid url address! Please fix it.';
        }
}

// create function: show/hide submit application button
function statusSubmitApplication(inputTagline, inputBusiness, inputProductLive,inputMetrics, inputTeamBackground, inputUnfairAdvantage, inputPricingModel, inputCustomerSources, inputCompetition, inputRaisingCapital, inputRaising, inputRoundProcess, inputPreviousCapital)
      {
        var fieldTagline = document.querySelector(inputTagline);
        
        var fieldBusiness = document.querySelector(inputBusiness);

        var fieldProductLive = document.querySelector(inputProductLive);

        var fieldMetrics = document.querySelector(inputMetrics);

        var fieldTeamBackground = document.querySelector(inputTeamBackground);
        
        var fieldUnfairAdvantage = document.querySelector(inputUnfairAdvantage);

        var fieldPricingModel = document.querySelector(inputPricingModel);
  
        var fieldCustomerSources = document.querySelector(inputCustomerSources);

        var fieldCompetition = document.querySelector(inputCompetition);

        var fieldRaisingCapital = document.querySelector(inputRaisingCapital);
        
        var fieldRaising = document.querySelector(inputRaising);

        var fieldRoundProcess = document.querySelector(inputRoundProcess);

        var fieldPreviousCapital = document.querySelector(inputPreviousCapital);
        
 if (!fieldTagline.value || !fieldBusiness.value || !fieldProductLive.value || !fieldMetrics.value || !fieldTeamBackground.value || !fieldUnfairAdvantage.value || !fieldPricingModel.value || !fieldCustomerSources.value || !fieldCompetition.value || !fieldRaisingCapital.value || !fieldRaising.value || !fieldRoundProcess.value || !fieldPreviousCapital.value) 
      {
       //tasks
       document.querySelector("#status-submit-ready").style.display = "none";
       document.querySelector("#status-submit-not-ready").style.display = "flex";


        
      }
 else
      {
        //tasks
        document.querySelector("#status-submit-not-ready").style.display = "none";
        document.querySelector("#status-submit-ready").style.display = "flex";
       
      }
 
      }


// create function: status update - value & proposition
function statusValueProposition(inputTagline, inputWebsite, inputFounderNames, inputBusiness, inputBusinessDescription, inputProductLive)
      {
        var fieldTagline = document.querySelector(inputTagline);

        var fieldWebsite = document.querySelector(inputWebsite);

        var fieldFounderNames = document.querySelector(inputFounderNames);
        
        var fieldBusiness = document.querySelector(inputBusiness);

        var fieldBusinessDescription = document.querySelector(inputBusinessDescription);

        var fieldProductLive = document.querySelector(inputProductLive);
        
 if (!fieldTagline.value || !fieldWebsite.value|| !fieldFounderNames.value|| !fieldBusiness.value|| !fieldBusinessDescription.value || !fieldProductLive.value) 
      {
        
        //titles
        document.querySelector("#title-status-productvalue-complete").style.display = "none";
        document.querySelector("#title-status-productvalue-incomplete").style.display = "flex";

        //tasks
        document.querySelector("#tasks-status-productvalue-complete").style.display = "none";
        document.querySelector("#tasks-status-productvalue-incomplete").style.display = "flex";
 
      }
 else
      {
        //titles
        document.querySelector("#title-status-productvalue-incomplete").style.display = "none";
        document.querySelector("#title-status-productvalue-complete").style.display = "flex";

        //tasks
        document.querySelector("#tasks-status-productvalue-incomplete").style.display = "none";
        document.querySelector("#tasks-status-productvalue-complete").style.display = "flex";
      }
 
      }

      // create function: status update - traction & metrics
function statusTractionMetrics(inputMetrics)
{
  var fieldMetrics = document.querySelector(inputMetrics);
  
  
if (!fieldMetrics.value) 
{
  //titles
  document.querySelector("#title-status-metrics-complete").style.display = "none";
  document.querySelector("#title-status-metrics-incomplete").style.display = "flex";

  //tasks
  document.querySelector("#tasks-status-metrics-complete").style.display = "none";
  document.querySelector("#tasks-status-metrics-incomplete").style.display = "flex";
}
else
{
  //titles
  document.querySelector("#title-status-metrics-incomplete").style.display = "none";
  document.querySelector("#title-status-metrics-complete").style.display = "flex";

  //tasks
  document.querySelector("#tasks-status-metrics-incomplete").style.display = "none";
  document.querySelector("#tasks-status-metrics-complete").style.display = "flex";
}

}

// create function: status update - my team
function statusTeam(inputTeamBackground, inputUnfairAdvantage)
      {
        var fieldTeamBackground = document.querySelector(inputTeamBackground);
        
        var fieldUnfairAdvantage = document.querySelector(inputUnfairAdvantage);

        
 if (!fieldTeamBackground.value || !fieldUnfairAdvantage.value) 
      {
        //titles
        document.querySelector("#title-status-team-complete").style.display = "none";
        document.querySelector("#title-status-team-incomplete").style.display = "flex";

        //tasks
        document.querySelector("#tasks-status-team-complete").style.display = "none";
        document.querySelector("#tasks-status-team-incomplete").style.display = "flex";
 
      }
 else
      {
        //titles
        document.querySelector("#title-status-team-incomplete").style.display = "none";
        document.querySelector("#title-status-team-complete").style.display = "flex";

  //tasks
        document.querySelector("#tasks-status-team-incomplete").style.display = "none";
        document.querySelector("#tasks-status-team-complete").style.display = "flex";
      }
 
      }

      // create function: status update - pricing & customers
function statusPricing(inputPricingModel, inputCustomerSources)
{
  var fieldPricingModel = document.querySelector(inputPricingModel);
  
  var fieldCustomerSources = document.querySelector(inputCustomerSources);

  
if (!fieldPricingModel.value || !fieldCustomerSources.value) 
{
  //titles
  document.querySelector("#title-status-pricing-complete").style.display = "none";
  document.querySelector("#title-status-pricing-incomplete").style.display = "flex";

  //tasks
  document.querySelector("#tasks-status-pricing-complete").style.display = "none";
  document.querySelector("#tasks-status-pricing-incomplete").style.display = "flex";

}
else
{
  //titles
  document.querySelector("#title-status-pricing-incomplete").style.display = "none";
  document.querySelector("#title-status-pricing-complete").style.display = "flex";

  //tasks
  document.querySelector("#tasks-status-pricing-incomplete").style.display = "none";
  document.querySelector("#tasks-status-pricing-complete").style.display = "flex";
}

}

// create function: status update - competition
function statusCompetition(inputCompetition)
{
  var fieldCompetition = document.querySelector(inputCompetition);
  
  
if (!fieldCompetition.value) 
{
  //titles
  document.querySelector("#title-status-competition-complete").style.display = "none";
  document.querySelector("#title-status-competition-incomplete").style.display = "flex";

  //tasks
  document.querySelector("#tasks-status-competition-complete").style.display = "none";
  document.querySelector("#tasks-status-competition-incomplete").style.display = "flex";
}
else
{
  //titles
  document.querySelector("#title-status-competition-incomplete").style.display = "none";
  document.querySelector("#title-status-competition-complete").style.display = "flex";

  //tasks
  document.querySelector("#tasks-status-competition-incomplete").style.display = "none";
  document.querySelector("#tasks-status-competition-complete").style.display = "flex";
}

}

// create function: status update - fundraising
function statusFundraising(inputRaisingCapital, inputRaising, inputRoundProcess, inputPreviousCapital)
      {
        var fieldRaisingCapital = document.querySelector(inputRaisingCapital);
        
        var fieldRaising = document.querySelector(inputRaising);

        var fieldRoundProcess = document.querySelector(inputRoundProcess);

        var fieldPreviousCapital = document.querySelector(inputPreviousCapital);
        
 if (!fieldRaisingCapital.value || !fieldRaising.value || !fieldRoundProcess.value || !fieldPreviousCapital.value) 
      {
        //titles
        document.querySelector("#title-status-fundraising-complete").style.display = "none";
        document.querySelector("#title-status-fundraising-incomplete").style.display = "flex";

        //tasks
        document.querySelector("#tasks-status-fundraising-complete").style.display = "none";
        document.querySelector("#tasks-status-fundraising-incomplete").style.display = "flex";
 
      }
 else
      {
         //titles
          document.querySelector("#title-status-fundraising-incomplete").style.display = "none";
          document.querySelector("#title-status-fundraising-complete").style.display = "flex";

         //tasks
          document.querySelector("#tasks-status-fundraising-incomplete").style.display = "none";
          document.querySelector("#tasks-status-fundraising-complete").style.display = "flex";
      }
 
      }


      // create function: status update - fundraising
function statusBreakEven(inputBreakEven)
{
  var fieldBreakEven = document.querySelector(inputBreakEven);
  console.log(fieldBreakEven.value);
  
  
if (!fieldBreakEven.value === "Yes") 
{
  //show the div that contains the burn rate question
  document.querySelector("#div-burn-rate").style.display = "flex";

}
else
{
   //hide the div that contains the burn rate question
  document.querySelector("#div-burn-rate").style.display = "none";

}

}

function setupAutosaveField(fieldSelector, validateFieldFn, airtableField, webflowField, messageResultSuccess, messageResultFailure) {
    const field = document.querySelector(fieldSelector);
    //console.log(field.value);

    field.addEventListener('input', function() {
        document.querySelector(messageResultSuccess).style.display = "none";
        document.querySelector(messageResultFailure).innerHTML = "";
    });


    field.addEventListener('blur', function() {
        if (typeof(validateFieldFn) === "function") {
          const validateResult = validateFieldFn(field.value);
          if (validateResult !== true) {
              // update error message with validate result
              document.querySelector(messageResultFailure).innerHTML= validateResult;
              document.querySelector(messageResultFailure).style.display = "flex";
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
            //document.querySelector(messageResultSelector).innerHTML = 'Saved!';
            document.querySelector(messageResultSuccess).style.display = "block";
           
            // status check: product & value proposition status check
            statusValueProposition("#Tagline", "#website-url-input", "#founder-names","#Business-Model", "#business-description","#Is-your-product-live-in-the-market");
            
            // status check: traction & metrics
            statusTractionMetrics("#Key-Metrics");

            // status check: my team
            statusTeam("#Founder-Team-Background","#Unfair-Advantage");

            // status check: pricing & customers
            statusPricing("#Pricing-Model","#customer-acquisition-sources");

            // status check: competition
            statusCompetition("#Competition-Positioning");

            // status check: fundraising
            statusFundraising("#Why-Rise-Capital","#Capital-Raising","#Round-Process","#Previous-Capital-Raised");

            // status check: submit application
            statusSubmitApplication("#Tagline","#Business-Model","#Is-your-product-live-in-the-market","#Key-Metrics","#Founder-Team-Background","#Unfair-Advantage","#Pricing-Model","#customer-acquisition-sources","#Competition-Positioning","#Why-Rise-Capital","#Capital-Raising","#Round-Process","#Previous-Capital-Raised");

            // status check: break even
            statusBreakEven("#break-even");
        })
        .catch(function (error) {
            console.error('did not save field in Webflow', webflowField, error);
            document.querySelector(messageResultFailure).innerHTML = `Oops, did not save: ${error.message}`;
            document.querySelector(messageResultFailure).style.display = "flex";
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
setupAutosaveField("#Tagline", validateName, "Tagline","tagline", "#saved-check-tagline", "#error-message-tagline");
setupAutosaveField("#website-url-input", validateUrl, "Website","website", "#saved-check-website", "#error-message-website");
setupAutosaveField("#founder-names", validateName, "Founder Names","founder-names", "#saved-check-founder-names", "#error-message-founder-names");
setupAutosaveField("#Business-Model", validateName, "Business Model","business-model", "#saved-check-business-model", "#error-message-business-model");
setupAutosaveField("#business-description", validateName, "Business Description","business-description", "#saved-check-business-description", "#error-message-business-description");
setupAutosaveField("#demo-screencast-link", validateUrl, "Demo Screencast","demo-screencast", "#saved-check-demo-screencast", "#error-message-demo-screencast");
setupAutosaveField("#deck-link", validateUrl, "Memo/Deck Link","deck-link", "#saved-check-deck-link", "#error-message-deck-link");
setupAutosaveField("#Is-your-product-live-in-the-market", validateName, "Is your product live in the market?","is-your-product-live-in-the-market", "#saved-check-is-your-product-live-in-the-market", "#error-message-is-your-product-live-in-the-market");
setupAutosaveField("#referrer", null, "Referred by","referred-by", "#saved-check-referred-by", "#error-message-referred-by");
setupAutosaveField("#country-of-incorporation", null, "Country Of Incorporation","country-of-incorporation", "#saved-check-country-of-incorporation", "#error-message-country-of-incorporation");


// traction & metrics
setupAutosaveField("#Key-Metrics", validateName, "Key Metrics","key-metrics", "#saved-check-key-metrics", "#error-message-key-metrics");
setupAutosaveField("#break-even", validateName, "Break-Even","break-even", "#saved-check-break-even", "#error-message-break-even");
setupAutosaveField("#burn-rate", validateName, "Burn Rate","burn-rate", "#saved-check-burn-rate", "#error-message-burn-rate");

// my team
setupAutosaveField("#Founder-Team-Background", validateName, "Founder & Team Background","founder-team-background", "#saved-check-founder-team-background", "#error-message-founder-team-background");
setupAutosaveField("#Unfair-Advantage", validateName, "Unfair Advantage","unfair-advantage", "#saved-check-unfair-advantage", "#error-message-unfair-advantage");
setupAutosaveField("#Links-To-Your-Work", null, "Links to your work","links-to-your-work", "#saved-check-links-to-your-work", "#error-message-links-to-your-work");

// pricing & customers
setupAutosaveField("#Market-Size", null, "Market Size","market-size", "#saved-check-market-size", "#error-message-market-size");
setupAutosaveField("#Average-Revenue-per-Customer", null, "Average Revenue per Customer","average-revenue-per-customer", "#saved-check-average-revenue-per-customer", "#error-message-average-revenue-per-customer");
setupAutosaveField("#Pricing-Model", validateName, "Pricing Model","pricing-model", "#saved-check-pricing-model", "#error-message-pricing-model");
setupAutosaveField("#customer-acquisition-sources", validateName, "Customer Acquisition Sources","customer-acquisition-sources", "#saved-check-customer-acquisition-sources", "#error-message-customer-acquisition-sources");

// competition
setupAutosaveField("#Competition-Positioning", validateName, "Competition & Positioning","competition-positioning", "#saved-check-competition-positioning", "#error-message-competition-positioning");

// funraising
setupAutosaveField("#Why-Rise-Capital", validateName, "Why are you raising capital","why-are-you-raising-capital", "#saved-check-why-are-you-raising-capital", "#error-message-why-are-you-raising-capital");
setupAutosaveField("#Capital-Raising", validateName, "Capital Raising","capital-raising", "#saved-check-capital-raising", "#error-message-capital-raising");
setupAutosaveField("#Round-Process", validateName, "Round / Process","round-process", "#saved-check-round-process", "#error-message-round-process");
setupAutosaveField("#Previous-Capital-Raised", validateName, "Previous Capital Raised","previous-capital-raised", "#saved-check-previous-capital-raised", "#error-message-previous-capital-raised");
setupAutosaveField("#Capital-Legal-Name", null, "Company Legal Name","company-legal-name", "#saved-check-company-legal-name", "#error-message-company-legal-name");

// check status per exercise

// status check: product & value proposition
statusValueProposition("#Tagline", "#website-url-input", "#founder-names","#Business-Model", "#business-description","#Is-your-product-live-in-the-market");

// status check: traction & metrics
statusTractionMetrics("#Key-Metrics");

// status check: my team
statusTeam("#Founder-Team-Background","#Unfair-Advantage");

// status check: pricing & customers
statusPricing("#Pricing-Model","#customer-acquisition-sources");

// status check: competition
statusCompetition("#Competition-Positioning");

// status check: fundraising
statusFundraising("#Why-Rise-Capital","#Capital-Raising","#Round-Process","#Previous-Capital-Raised");

// status check: submit application
statusSubmitApplication("#Tagline","#Business-Model","#Is-your-product-live-in-the-market","#Key-Metrics","#Founder-Team-Background","#Unfair-Advantage","#Pricing-Model","#customer-acquisition-sources","#Competition-Positioning","#Why-Rise-Capital","#Capital-Raising","#Round-Process","#Previous-Capital-Raised");

// status check: break even
statusBreakEven("#break-even");