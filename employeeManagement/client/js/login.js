const forms = document.querySelector("#signup");
const username = document.querySelector("#username");
const password = document.querySelector("#password");



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

forms.addEventListener('submit', function (e) {
    e.preventDefault();
    let isUsernameValid = checkUsername(),
        isPasswordValid = checkPassword();

    let isFormValid = isUsernameValid &&
        isPasswordValid;

    if(isFormValid){
        const formData  = new FormData(forms);
        const data = Object.fromEntries(formData);
        
        fetch('http://localhost:4500/employedb').then(res=>res.json())
        .then((data)=>{
            data.forEach((id)=>{
                if(id.username == username.value && id.password == password.value){
                    window.location.href='/client/home.html'
                    //console.log(data)
                }else{
                    const formFail = document.querySelector(".Form-failed");
                    formFail.classList.remove('hide');
                    formFail.classList.add('show');
                }
            })
        })
    }
});