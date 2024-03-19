const form= document.getElementById("form");
const username= document.getElementById("username");
const email= document.getElementById("email");
const password= document.getElementById("password");
const Cpassword= document.getElementById("confirm-password");
const submit= document.getElementById("btn");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    validateInputs();
})

const validateInputs = ()=>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const CpasswordValue = Cpassword.value.trim();

    if(usernameValue === ''){
        SetError(username,'Username is Required');
    }
        else{
            setSuccess(username);
        }

        if(emailValue ===''){
            SetError(email,'Email is Required');
        }
        else if(!isValidEmail(emailValue)){
            SetError(email,'Provide a Valid Email Address');
        }
        else{
            setSuccess(email);
        }
    
        if(passwordValue ===''){
            SetError(password ,'Password is Required');
        }
        else if(passwordValue.lenght <8){
            SetError(password,'password must be at least 8 Characters.')
        }
        else{
            setSuccess(password);
        }

        if(CpasswordValue ===""){
            SetError(Cpassword ,'Please Confirm Your Password');
        }
        else if(CpasswordValue !== passwordValue){
            SetError(Cpassword,"Password does not Match");
        }
        else{
            setSuccess(Cpassword);
        }
    }

    const SetError= (element,message)=>{
       const inputControl = element.parentElement; 
       const errorDisplay = inputControl.
       querySelector('.error');
       errorDisplay.innerText = message;

       inputControl.classList.add('error');
       inputControl.classList.remove('success');
    }

    const setSuccess= element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector
    ('.error');
    
    

    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
 function isValidEmail(e){
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
 }