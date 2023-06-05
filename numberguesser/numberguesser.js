//Game Values
let min = 1, max=10,winningNum=2,guessesLeft=3;
//UI elements
const game = document.getElementById('game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
// guessBtn.addEventListener('click',function(){
//     let guess = parseInt(guessInput.value);
//     console.log(guess);

//     if(guess === NaN || guess <min || guess>max){
//         setMessage('Please eneter a number between ');
//     }
// });
// function setMessage(msg){
//     message.textContent = msg;
// }

guessBtn.addEventListener('click',function(){
    let guess = parseInt(guessInput.value);
    console.log(guess);

    if(guess === NaN || guess < min || guess > max){
        
    }
});
function guessMessage( msg){
    let msg = message.textContent;
}