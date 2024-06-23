//check user status
onAuthStateChanged(auth, (user) => {
  console.log("user: ", user);

  if (user) {
    window.location.href = "../uploadproduct/uploadproduct.html";
  } else {
    window.location.href = "pages/login/login.html";
  }
});