const Name = document.getElementById('Name');
const PName = document.getElementById('PName');
const number = document.getElementById('number');
const email = document.getElementById('email');
const dob = document.getElementById('dob');
const address = document.getElementById('address');
const selectfood = document.getElementById('selectfood');
const selectcolor = document.getElementById('selectcolor');
const Gender = document.getElementById('Gender');

//reset form
document.getElementById('Reset').addEventListener('click',onReset);
function onReset(e){
    document.getElementById('form').reset();
    e.preventDefault();
}

//save form
document.getElementById('Save').addEventListener('click',onclick);
function onclick(e){

    var dict = { Name : Name.value, 
        PName : PName.value,
        number : number.value,
        email : email.value,
        dob : dob.value,
        address : address.value,
        Gender : Gender.value,
        selectfood : selectfood.value,
        selectcolor : selectcolor.value
    };
    e.preventDefault();
    
    console.log(dict);
}
