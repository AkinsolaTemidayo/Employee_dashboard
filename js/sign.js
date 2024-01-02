// Beginning of  signup and signin script
document.addEventListener("DOMContentLoaded", function () {
  let currentMode = localStorage.getItem("signupMode");

  let signupBtn = document.getElementById("signupBtn");
  let signinBtn = document.getElementById("signinBtn");
  let nameField = document.getElementById("nameField");
  let title = document.getElementById("title");
  let checkBtn = document.getElementById("checkBtn");
  let newsLetter = document.getElementById("newsLetter");
  let rememberBtn = document.getElementById("rememberBtn");
  let textField = document.getElementById("textField");

  function setMode(mode) {
    if (mode === "signin") {
      nameField.style.maxHeight = "0";
      title.innerHTML = "Sign In";
      signupBtn.classList.add("disable");
      signinBtn.classList.remove("disable");

      checkBtn.style.display = "none";
      newsLetter.style.display = "none";
      rememberBtn.style.display = "block";
      textField.style.display = "block";
    } else {
      nameField.style.maxHeight = "60px";
      title.innerHTML = "Sign Up";
      signupBtn.classList.remove("disable");
      signinBtn.classList.add("disable");

      checkBtn.style.display = "block";
      newsLetter.style.display = "block";
      rememberBtn.style.display = "none";
      textField.style.display = "none";
    }
  }

  // Set the initial mode or use "signup" as the default
  setMode(currentMode || "signup");

  // Event listeners for buttons
  signinBtn.onclick = function () {
    setMode("signin");
    // Store the mode in local storage
    localStorage.setItem("signupMode", "signin");
  };

  signupBtn.onclick = function () {
    setMode("signup");
    // Store the mode in local storage
    localStorage.setItem("signupMode", "signup");
  };
});
// End of  signup and signin script

// password visibility
const $password = document.querySelector('input[type="password"]');
const $toggler = document.getElementById("pass");

const showHidePassword = () => {
  if ($password.type === "password") {
    $password.setAttribute("type", "text");
    $password.style.color = "#000";
  } else {
    $password.setAttribute("type", "password");
    $password.style.color = ""; // Reset to default
  }

  $toggler.classList.toggle("fa-eye");
  $toggler.classList.toggle("fa-eye-slash");
};

$toggler.addEventListener("click", showHidePassword);
