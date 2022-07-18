// let show = document.getElementById("show");

// let close = document.getElementById("close");

// close.addEventListener("click", function() {

//     // alert('click me')
//     close.classList.add('hide-eye');
//     show.classList.add("view-eye");
// })

// show.addEventListener("click", function() {
//     close.classList.remove("hide-eye")
//     show.classList.remove("view-eye")
    
// })


const togglePassword = document.querySelector("#togglePassword");
        const password = document.querySelector("#exampleInputPassword1");

        togglePassword.addEventListener("click", function () {
            // toggle the type attribute
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
            
            // toggle the icon
            this.classList.toggle("bi-eye");
        });

//<i class="bi bi-eye fs-4"></i>


        function isFilled(){
            let nameId = document.querySelector('#exampleInputEmail1').value;
            let mail = document.querySelector('#exampleInputPassword1').value;
            // let message = document.querySelector('#message').value;
            if( nameId !=="" && mail !== ""){  // && message !== ""
                 document.getElementById('close').removeAttribute('disabled');
                 document.getElementById('close').style.background ='rgb(23,162,0)';
            }
        }
        
         isFilled();




