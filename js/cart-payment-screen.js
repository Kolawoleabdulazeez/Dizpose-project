$(document).ready(function(){
    $('input[type ="radio"]').click(function(){
        const inputValue =$(this).attr("value");
        const targetPayment = $("." + inputValue);
        $(".payment").not(targetPayment).hide();
        $(targetPayment).show();

    })
})