import {
  getDatabase,
  ref,
  push,
  set,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import {
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { auth, db } from "../../js/firebase.js";

var productImg = document.getElementById("productImg");
var productTitle = document.getElementById("productTitle");
var productPrice = document.getElementById("productPrice");
var productDescription = document.getElementById("productDescription");
const logOutBtn = document.getElementById("logoutBtn");

window.uploadProduct = function () {
  var obj = {
    productImg: productImg.value,
    productTitle: productTitle.value,
    productPrice: productPrice.value,
    productDescription: productDescription.value,
  };
  console.log(obj);

  if (
    !obj.productImg ||
    !obj.productTitle ||
    !obj.productPrice ||
    !obj.productDescription
  ) {
    alert("All fields are required. Please fill in all the fields.");
    return;
  }
  alert(err.message);

  obj.id = push(ref(db, "uploadItems")).key;

  var reference = ref(db, `uploadItems/${obj.id}`);
  set(reference, obj)
    .then(function () {
      window.location.assign("../../index.html");
    })
    .catch(function () {});
};

//signOut
const logout = async (event) => {
 try {
   event.preventDefault()
   const res = await signOut(auth);
   // Sign-out successful.
   console.log("Sign-out successful:", res);
  //  window.location.assign("../login/login.html");
   
    // .catch((error) => {
   //   // An error happened.
   //   console.log(error);
 } catch (error) {
  console.log("🚀 ~ error:", error)
  
 }
};

logOutBtn.addEventListener("click", logout);
