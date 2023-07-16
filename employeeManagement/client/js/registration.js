const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;
const checkUsername = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const Validusername = username.value.trim();

    if (!isRequired(Validusername)) {
        showError(username, 'Username cannot be blank.');
    } else if (!isBetween(Validusername.length, min, max)) {
        showError(username, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(username);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const Validemail = email.value.trim();
    if (!isRequired(Validemail)) {
        showError(email, 'Email cannot be blank.');
    } else if (!isEmailValid(Validemail)) {
        showError(email, 'Email is not valid.')
    } else {
        showSuccess(email);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;


    const Validpassword = password.value.trim();

    if (!isRequired(Validpassword)) {
        showError(password, 'Password cannot be blank.');
    } else if (!isPasswordSecure(Validpassword)) {
        showError(password, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(password);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    const ValidconfirmPassword = confirmPassword.value.trim();
    const Validpassword = password.value.trim();

    if (!isRequired(ValidconfirmPassword)) {
        showError(confirmPassword, 'Please enter the password again');
    } else if (Validpassword !== ValidconfirmPassword) {
        showError(confirmPassword, 'The password does not match');
    } else {
        showSuccess(confirmPassword);
        valid = true;
    }

    return valid;
};




const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('span');
    error.textContent = message;
};

const showSuccess = (input) => {

    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('span');
    error.textContent = '';
}



form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;
    if(isFormValid){
        const formData  = new FormData(form);
        const data = Object.fromEntries(formData);

        fetch('http://localhost:4500/employedb',{
            method: 'POST',
            headers:{
                "content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        }).then((res)=>res.json())
        .then((data)=>{
            const formContainer = document.querySelector(".form-container")
            const formSucess = document.querySelector('.form-sucess');
            if(data.status === 'sucess'){
                formSucess.classList.remove('hide');
                formSucess.classList.add('show');

                formContainer.classList.remove('show');
                formContainer.classList.add('hide');
            }
          //  console.log(data)
        }).catch((e) => {
            const formError = document.querySelector(".error");
            formError.classList.remove('hide');
            formError.classList.add('show');
        });
    }
});


