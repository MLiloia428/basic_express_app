
document.getElementById("register-user").onclick = function() {
  registerUser();
};

function registerUser() {
  console.log('Register user button clicked!');
  // Do some stuff
  window.location.href = "/login";
}