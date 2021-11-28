const form = document.querySelector('form');
const firstname = document.querySelector('#firstName');
const lastname = document.querySelector('#lastName');
const email = document.querySelector('#email');
const textarea = document.querySelector('#textarea');


function showError(input,message){
    const formcontrol = input.parentElement;
    formcontrol.className = 'formControl error';
    const small = formcontrol.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formcontrol = input.parentElement;
    formcontrol.className = 'formControl success';
}








//prevent the submit
form.addEventListener('submit',function(e){
    e.preventDefault();
    if(firstname.value == ""){
        showError(firstname,"Please Enter Your First Name");
    }
    else{
        showSuccess(firstname);
    }
    if(lastname.value == ""){
        showError(lastname,"Please Enter Your Last Name");
    }
    else{
        showSuccess(lastname);
    }
    if(email.value == ""){
         showError(email,"Please Enter your Email");
    }
    else{
showSuccess(email);
    }
    if(textarea.value == ""){
         showError(textarea,"Please Enter Your Message");
    }
    else{
showSuccess(textarea);
    }
    }
);