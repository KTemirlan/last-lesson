let number = document.getElementById('num');
let plusOne = document.getElementById('plus');
let minusOne = document.getElementById('minus');
let resetNum = document.getElementById('reset');

plusOne.addEventListener('click', plus)
minusOne.addEventListener('click', minus)
resetNum.addEventListener('click', reset)

console.log(number);
function plus () {
    number.innerText++;
}

function minus () {
    if(number.innerText != 0){
        number.innerText--;
    }
}

function reset () {
    number.innerText = 0;
}