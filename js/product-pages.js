const increaseBtn = document.querySelector('.plus');
const decreaseBtn = document.querySelector('.minus');
const quantity = document.querySelector('.number-wanted');

let num = 0;

increaseBtn.addEventListener('click', () => {
    num++;
    quantity.innerText = num;
})

decreaseBtn.addEventListener('click', () => {
    if(num > 1) {
        num--;
        quantity.innerText = num;
    }
})

const increaseBtnTwo = document.querySelector('.plus-two');
const decreaseBtnTwo = document.querySelector('.minus-two');
const quantityTwo = document.querySelector('.number-wanted-two');

let numba = 0;
 
increaseBtnTwo.addEventListener('click', () => {
    numba++;
    quantityTwo.innerText = numba;
})

decreaseBtnTwo.addEventListener('click', () => {
    if(numba > 1) {
        numba--;
        quantityTwo.innerText = numba;
    }
})

const increaseBtnThree = document.querySelector('.plus-three');
const decreaseBtnThree = document.querySelector('.minus-three');
const quantityThree = document.querySelector('.number-wanted-three');
 
let nume = 0;

increaseBtnThree.addEventListener('click', () => {
    nume++;
    quantityThree.innerText = nume;
})

decreaseBtnThree.addEventListener('click', () => {
    if(nume > 1) {
        nume--;
        quantityThree.innerText = nume;
    }
})

