// Import the functions you need from the SDKs you need
import { auth } from "./firebase.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmMmrVU8IG_PPr6Wz3vhBiD3Tc62OnBYA",
  authDomain: "olx-uploading-products-ffef5.firebaseapp.com",
  projectId: "olx-uploading-products-ffef5",
  storageBucket: "olx-uploading-products-ffef5.appspot.com",
  messagingSenderId: "929435343586",
  appId: "1:929435343586:web:dcf80bc49c16db720edcbb",
  measurementId: "G-Z4F2RK5MJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

var addItemParent = document.getElementById("addItemParent");
var uploadItems = [];


function renderProducts() {
  addItemParent.innerHTML = ``;
  for (var i = 0; i < uploadItems.length; i++) {
    var obj = uploadItems[i];
    addItemParent.innerHTML += `
     <div id = ${obj.id} class="card  justify-content-around style="width: 18rem;" onclick="productDetail(this) ">
     <img id="productImg" src="${obj.productImg}" class="card-img-top" alt="..." width="100px">
     <div class="card-body">
        <h4 id="productTitle" class="card-title">${obj.productTitle}</h4>
      <h5 id="productPrice" class="card-price"><b>Rs ${obj.productPrice}</b></h5>
        <p id="productDescription" class="card-text">${obj.productDescription}</p>`
  }
}

function getData() {
  var reference = ref(db, "uploadItems");
  onValue(reference, function (dt) {
    uploadItems = Object.values(dt.val());
    renderProducts();
  });


}
getData();

window.productDetail = function(ele){
  console.log('id=.' , ele)
  localStorage.setItem("productid", ele.id)
  window.location.assign("./pages/productdetail/productdetail.html")
}

