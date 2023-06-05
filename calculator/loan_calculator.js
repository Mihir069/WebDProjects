//listen for submit
document.getElementById('loan-form').addEventListener('submit',calculateResults);
// document.getElementById('loan-form').addEventListener('submit',function(){
//     e.preventDefault();
// });
function calculateResults(e){
    console.log("Calculating.....");
    const amount =  document.getElementById('amount');
    const intrest =  document.getElementById('intrest');
    const years =  document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
    
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(intrest.value);
    const calculatedPayment = parseFloat(years.value)*12;

    const x = Math.pow(calculatedInterest,calculatedPayment);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly*calculatedPayment)-principal).toFixed(2);
    }
    else{
        console.log("Check number");
    }
    
    e.preventDefault();
}

// for clearing error 



// function showError(error){
//     const errorDiv = document.createElement("div");

//     const card = document.querySelector('.card');
//     const heading = document.querySelector('.heading');

//     errorDiv.className = 'alert';

//     errorDiv.appendChild(document.createTextNode(error));

//     //clear error 
//     setTimeout(clearError,3000);


//     // function clearError(){
//     //     document.querySelector('.alert').remove();
//     // }
// }

// function clearError(){
//     document.querySelector('.alert').remove();
// }