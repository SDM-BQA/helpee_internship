const emailInput = document.getElementById("email_input");
const passInput = document.getElementById("pass_input");
const passIcon = document.getElementById("pass_icon");
const submitBtn = document.getElementById("submit");
const errorEmail = document.getElementById("email_error");
const errorPass = document.getElementById("pass_error");

passIcon.addEventListener("click", () => {
  if (passIcon.classList.contains("fa-eye")) {
    passIcon.classList.replace("fa-eye", "fa-eye-slash");
    passInput.type = "name";
  } else {
    passIcon.classList.replace("fa-eye-slash", "fa-eye");
    passInput.type = "password";
  }
});

// check email
const checkEmail = (email) => {
  if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
    if (!errorEmail.classList.contains("show_error")) {
      errorEmail.classList.add("show_error");
    } else {
      if (errorEmail.classList.contains("show_error")) {
        errorEmail.classList.remove("show_error");
      }
    }
  }
};

// check password
const checkPassword = (passwordVal) => {
  if (passwordVal.length <= 6) {
    if (!errorPass.classList.contains("show_error")) {
      errorPass.classList.add("show_error");
    } else {
      if (errorPass.classList.contains("show_error")) {
        errorPass.classList.remove("show_error");
      }
    }
  }
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailVal = emailInput.value;
  const passwordVal = passInput.value;

  if (checkPassword(passwordVal) && checkEmail(emailVal)) {
    console.log("Entered Email is: ", emailVal);
    console.log("Entered Password is: ", passwordVal);
    window.location.href = "https://www.google.com";
  }
});
