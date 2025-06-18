const emailInput = document.getElementById("email_input");
const passInput = document.getElementById("pass_input");
const passIcon = document.getElementById("pass_icon");
const submitBtn = document.getElementById("submit");
const errorEmail = document.getElementById("email_error");
const errorPass = document.getElementById("pass_error");

const demoEmail = "sdm@gmail.com";
const demoPassword = "123456";

passIcon.addEventListener("click", () => {
  if (passIcon.classList.contains("fa-eye")) {
    passIcon.classList.replace("fa-eye", "fa-eye-slash");
    passInput.type = "text";
  } else {
    passIcon.classList.replace("fa-eye-slash", "fa-eye");
    passInput.type = "password";
  }
});

// check email
const checkEmail = (email) => {
  if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
    errorEmail.classList.add("show_error");
    return false;
  } else {
    errorEmail.classList.remove("show_error");
    return true;
  }
};

// check password
const checkPassword = (passwordVal) => {
  if (passwordVal.length < 6) {
    errorPass.classList.add("show_error");
    return false;
  } else {
    errorPass.classList.remove("show_error");
    return true;
  }
};

const checkCredential = (email, password) => {
  if (email === demoEmail && password === demoPassword) return true;
  return false;
};

let emailVal;
let passwordVal;
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  emailVal = emailInput.value;
  passwordVal = passInput.value;

  if (checkEmail(emailVal) && checkPassword(passwordVal)) {
    if (checkCredential(emailVal, passwordVal)) {
      if (errorPass.classList.contains("show_error"))
        errorPass.classList.remove("show_error");


      localStorage.setItem('email', emailVal)
      console.log("Entered Email is: ", emailVal);
      console.log("Entered Password is: ", passwordVal);
      window.location.href = "home.html";
    } else {
      errorPass.classList.add("show_error");
      errorPass.textContent = "Invalid Login Credential";
    }
  }
});

// const getFormValues = () => ({ email: emailVal, password: passwordVal });

// export { getFormValues };
