function isFilled(){
    let surname = document.querySelector('#surname').value;
    let password = document.querySelector('#password').value;
    let repassword = document.querySelector('#repassword').value;
    let phonenumber = document.querySelector('#phonenumber').value;
    let email = document.querySelector('#email').value;
    if( surname !=="" && password !== "" && phonenumber !== ""&& email !== ""  && repassword !== ""){
        document.getElementById('btn').removeAttribute('disabled');
        document.getElementById('btn').style.background ='#17A200';
    }
}

isFilled();


var togglePassword = document.querySelector("#togglePassword");
var password = document.querySelector("#password");

togglePassword.onclick = function () {
    if (password.type === "password") {
        password.type = "text";
    }
    else
    {
        password.type = "password";
    }
}

var link = document.querySelector(".hide");
var pass = document.querySelector("#repassword");

link.onclick = function () {
    if (pass.type === "password") {
        pass.type = "text";
    }
    else
    {
        pass.type = "password";
    }
}