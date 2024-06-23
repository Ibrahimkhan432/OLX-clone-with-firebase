import {  
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { auth } from "../../js/firebase.js";



const  loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit",login)

async function login(event) {
  event.preventDefault();
  console.log("running signup");
  
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;  

  console.log("email",email);
  console.log("password",password);

  try {
  const result =await signInWithEmailAndPassword(auth, email, password) 
  console.log("🚀 ~ form.addEventListener ~ result:", result);

} catch (error) {
  alert("incorrect email or password");
  console.log("error", error);
  // const errorCode = error.code;
  // const errorMessage = error.message;
}
}

// check status
const checkAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.href = "../uploadproduct/uploadproduct.html";
    } else {
    }
  });
};
checkAuthState();