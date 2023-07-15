function myfunction() {
  var x = document.getElementById("pass");

  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function validate() {
  var password = document.getElementById("pass");
  var length = document.getElementById("length");

  if (password.value.length >= 8) {
    alert("login successful");
    window.location.replace("index.html");
    return false;
  } else {
    alert("login failed,type character more than 8 digit");
  }
}
