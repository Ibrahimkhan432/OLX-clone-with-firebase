import {
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { db } from "../../js/firebase.js";


var productDetail = document.getElementById("productDetail");
var img = document.getElementById("productImg");
var productTitle = document.getElementById("productTitle");
var productPrice = document.getElementById("productPrice");
var productDescription = document.getElementById("productDescription");

function getData() {
  var id = localStorage.getItem("productid");
  var reference = ref(db, `uploadItems/${id}`);
  onValue(reference, function (data) {
    var uploadItems = data.val();
    if (uploadItems) {
      img.src = uploadItems.productImg;
      productPrice.innerHTML = uploadItems.productPrice;
      productDescription.innerHTML = uploadItems.productDescription;
    }
  });
}
getData();
