function isFilled(){
    let passwordId = document.querySelector('#password').value;
    if( passwordId !==""){
         document.getElementById('validate-btn').removeAttribute('disabled');
         document.getElementById('validate-btn').style.background ='#008000';
    }
}

 isFilled();