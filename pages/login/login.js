import {  
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { auth } from "../../js/firebase.js";



const  loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit",login)

async function login() {
  console.log("running login");
  
  var email = document.getElementById("email")
  var password = document.getElementById("password")  

  console.log("email",email.value);
  console.log("password",password.value);

  
  const result =await signInWithEmailAndPassword(auth, email, password) 
  console.log("🚀 ~ form.addEventListener ~ result:", result);


signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}

//      signInWithEmailAndPassword(auth, obj.email, obj.password)
//      .then(function(res){
//       // email.value = "", password.value = ""
//       // window.location.assign("../products/products.html")
    //  })
    //  .catch(function(rej){
    //     if(rej.message === "Firebase: Error (auth/invalid-credential)."){
    //         alert("incorrect email or password")
    //       }
    //       else if(rej.message === "Firebase: Error (auth/invalid-email)."){
    //       let input = document.querySelectorAll(".input input")
    //         input.forEach(function(e){
    //           e.style.border = "1px solid red"
    //         })
    //       }
    //  })
    //  .catch(function(rej){
    //     alert(rej.message)
    //  })
  // }