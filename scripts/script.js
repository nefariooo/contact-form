const   firstName = document.getElementById("js-firstName-box"),
        lastName = document.getElementById("js-lastName-box"),
        email = document.getElementById("js-email-box"),
        queryGeneralEnquiry = document.getElementById("js-general-enquiry"),
        querySupportRequest = document.getElementById("js-support-request"),
        containerGE = document.getElementById("js-general-enquiry-container"),
        containerSR = document.getElementById("js-support-request-container"),
        message = document.getElementById("js-message-box"),
        consentCheck = document.getElementById("js-consent-box"),
        submitButton = document.getElementById("js-submit-button");

let flag = true;

submitButton.addEventListener("click", () =>{
    validateInboxes();
    validateCheckBoxes();
    isValidEmail();
    checkFlag();
})

function validateInboxes(){
    const inputBoxes = [
        [firstName,document.getElementById("validation-message-firstName")],
        [lastName,document.getElementById("validation-message-lastName")],
        [email,document.getElementById("validation-message-email")],
        [message,document.getElementById("validation-message-message")],
    ];

    for(let i=0; i<inputBoxes.length; i++){
    if(inputBoxes[i][0].value === ""){
        inputBoxes[i][1].style.display = "block";
        flag = false;
    }else{
        inputBoxes[i][1].style.display = "none";
    }
}
}

function validateCheckBoxes(){
    const checkBoxes = [
        [!queryGeneralEnquiry.checked && !querySupportRequest.checked,document.getElementById("validation-message-query")],
        [!consentCheck.checked,document.getElementById("validation-message-consent")],
        [!isValidEmail(),document.getElementById("validation-message-email")]
    ];

    for(let i=0; i<checkBoxes.length; i++){
    if(checkBoxes[i][0]){
        checkBoxes[i][1].style.display = "block";
        flag = false;
    }else{
        checkBoxes[i][1].style.display = "none";
    }
}
}

function isValidEmail() {
    const input = email.value;
    const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailErrorMsg = document.getElementById("validation-message-email");
    return input.match(validRegex);
}

function checkFlag(){
    if(!flag){
        consentCheck.checked = false;
        console.log("bass");
    }else{
        consentCheck.checked = true;
        successfullSubmit();
    }
    flag = true;
}

queryGeneralEnquiry.addEventListener("click", ()=>{
    containerGE.style.backgroundColor = "var(--green-200)";
    containerSR.style.backgroundColor = "white";
})
querySupportRequest.addEventListener("click", ()=>{
    containerSR.style.backgroundColor = "var(--green-200)";
    containerGE.style.backgroundColor = "white";
})

function successfullSubmit(){
    submitButton.innerText = "Successfully Submitted!";
    submitButton.classList.add("submitted_button");
    submitButton.classList.remove("submit-button");  
}

