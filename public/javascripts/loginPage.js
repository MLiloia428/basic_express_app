
document.getElementById("sign-in-user").onclick = function() {
  signInUser();
};

function signInUser() {
  const username = document.getElementById("username-input");
  const password = document.getElementById("password-input");
  if(!username || !password) return;
  // Do some stuff
  window.location.href = "/dashboard";
  // console.log('Sign in user button clicked!');
  // Do some stuff
}