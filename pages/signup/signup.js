import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { auth } from "../../js/firebase.js";

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", signup);

async function signup() {
  console.log("running signup");

  var userName = document.getElementById("userName");
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  console.log("userName", userName.value);
  console.log("email", email.value);
  console.log("password", password.value);

  const result = await createUserWithEmailAndPassword(auth, email, password);
  console.log("🚀 ~ form.addEventListener ~ result:", result);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
// signupform.addEventListener("submit",  async(e) => {
//   e.preventDefault();

//   const data = new FormData(e.target);
//   const userName = data.get("userName");
//   const email = data.get("email");
//   const password = data.get("password");

// let signup = document.getElementById("signup");

// signup.addEventListener("click",function(){

//   var userName = document.getElementById('userName')
//   var email = document.getElementById('email')
//   var password = document.getElementById('password')
// console.log(userName.value);
// console.log( email.value);
// console.log( password.value);
// });
