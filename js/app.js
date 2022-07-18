$('ul li').click(function() {
    $('.active').removeClass('active');
 $(this).addClass('active');
 })

/*$('a.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this =$(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }

    $input.val(value);
});

$('a.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value < 100) {
        value = value +1;
    } else {
        value =100;
    }

    $input.val(value);
});

let plusBtn = document.querySelectorAll('.plus-btn');
let minusBtn = document.querySelectorAll('.minus-btn');
let qtyNum = document.querySelectorAll('.number');

plusBtn.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        btn.previousElementSibling.value++;
       
    })
})

minusBtn.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        btn.nextElementSibling.value = (btn.nextElenebtSibling.value ==0) ? 0 : btne.nextElementSibling.value - 1;
    })
})

document.addEventListener("click", handle);

function handle(evt) {
    if (evt.target.type === "button") {
        return handleBtn(evt.target);
    }
}

function handleBtn(btn) {
    const elem = document.querySelector(`#${btn.dataset.for}`);
const nwValue = +elem.value + (btn.value === "-" ? -1 : 1);
elem.value = nwValue >= +elem.min ? nwValue : elem.min;
}*/