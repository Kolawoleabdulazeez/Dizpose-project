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


const remove = document.querySelector(".remove");
const salesDetailsi = document.querySelector('.sales-details-picture');
const salesDetails = document.querySelector('.sales-details');
const shoppings = document.querySelector('.shoppings');
const cost = document.querySelector('.shopping-cost');
const checkout = document.querySelector('.checkout-value');

remove.addEventListener('click' , () =>{
    salesDetailsi.remove();
    salesDetails.remove();
    shoppings.remove();
    cost.remove();
    checkout.remove();

})
