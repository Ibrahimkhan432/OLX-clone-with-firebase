import { auth } from "../../js/firebase.js";
import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", signup);

async function signup(event) {
  event.preventDefault();
  console.log("running signup");

  const data = new FormData(event.target);
  const userName = document.getElementById("userName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;



  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log("🚀 ~ form.addEventListener ~ result:", result)
signupForm.reset();
if (result) {
  window.location.href = "../uploadproduct/uploadproduct.html";
} else {
}
    // Create a new user in Firestore
  } catch (error) {
    if (userName==="" || email==="" || password==="") {
      alert("Please fill all Fields");
    }
    else if(password.length <6){
      alert("password should be at least 6 characters");
    }
    else if (error.message === "Firebase: Error (auth/email-already-in-use)."){
      alert("this email already in use");
    }
    else{
alert("account created successfully");
    }
    console.log("error", error);
    // const errorCode = error.code;
    // const errorMessage = error.message;
  }
}
