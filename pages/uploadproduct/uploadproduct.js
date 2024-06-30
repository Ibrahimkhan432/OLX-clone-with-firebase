import {
  getDatabase,
  ref,
  push,
  set,

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { auth, db } from "../../js/firebase.js";

var productImg = document.getElementById("productImg");
var productTitle = document.getElementById("productTitle");
var productPrice = document.getElementById("productPrice");
var productDescription = document.getElementById("productDescription");

window.uploadProduct = function () {
  var obj = {
    productImg: productImg.value,
    productTitle: productTitle.value,
    productPrice: productPrice.value,
    productDescription: productDescription.value,
  };
  console.log(obj);

  if (!obj.productImg || !obj.productTitle || !obj.productPrice || !obj.productDescription) {
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

const logout = async () =>{

await signOut(auth)
.then(() => {
  // Sign-out successful.
  console.log("Sign-out successful.");
  window.location.assign("../pages/signup/signup.html");
  }).catch((error) => {
    // An error happened.
    console.log(error);
    });
    
}
logoutBtn.addEventListener("click",logout);

