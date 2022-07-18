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
}


/*$('.quantity .btn').on('click', function(){
    var qty = parseInt ($(this).parent('quantity').find('.number').val());
    if($(this).hasClass('plus-btn')) {
        qty++
    }else {
        if(qty > 1) {
            qty--;
        }
    }
    qty = (isNan(qty))?1:qty;
    $(this).parent('.quantity').find('.number').val(qty);
});


$('.minus-btn').on('click', function(e){
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if(value > 1){
        value = value - 1;
    } else {
        value = 0;
    }

    $input.val(value);
});

$('.plus-btn').on('click', function(e){
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if(value < 100){
        value = value + 1;
    } else {
        value = 100;
    }

    $input.val(value);
});*/