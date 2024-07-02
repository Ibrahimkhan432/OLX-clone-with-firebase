//check user status
onAuthStateChanged(auth, (user) => {
  console.log("user: ", user);

  if (user) {
    window.location.href = "./pages/signup/signup.html";
  } else {

  }
});