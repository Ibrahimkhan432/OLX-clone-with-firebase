// Import the functions you need from the SDKs you need
import { auth } from "./firebase.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

var addItemParent = document.getElementById("addItemParent");
var uploadItems = [];


function renderProducts() {
  addItemParent.innerHTML = ``;
  for (var i = 0; i < uploadItems.length; i++) {
    var obj = uploadItems[i];
       addItemParent.innerHTML += `
       <div class="item-div">
        <div id = ${obj.id}  style="width: 18rem;" onclick="productDetail(this) ">
        <img class="img-div" id="productImg" src="${obj.productImg}" width="200px">
        <h4 id="productTitle" class="title-div"><i>${obj.productTitle}</i></h4>
        <h5 id="productTitle" class="price-div"><b> Rs ${obj.productPrice}</b></h5>
        <hr>
        <h6 id="productDescription" class="descr-div">${obj.productDescription}</h6>
        </div>
        </div>`




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



