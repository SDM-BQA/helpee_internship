const userNameInput = document.getElementById("username_input");
const passInput = document.getElementById("pass_input");
const passIcon = document.getElementById("pass_icon");
const submitBtn = document.getElementById("submit");
const errorUsername = document.getElementById("username_error");
const errorPass = document.getElementById("pass_error");

const demoUsername = "sdmbqa";
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
const checkUsername = (username) => {
 if(username.length < 3){
    errorUsername.classList.add('show_error')
    return false
}else{
    errorUsername.classList.remove('show_error')
    return true
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

const checkCredential = (userName, password) => {
  if (userName === demoUsername && password === demoPassword) return true;
  return false;
};

let userNameVal;
let passwordVal;
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  userNameVal = userNameInput.value;
  passwordVal = passInput.value;

  if (checkUsername(userNameVal) && checkPassword(passwordVal)) {
    if (checkCredential(userNameVal, passwordVal)) {
      if (errorPass.classList.contains("show_error"))
        errorPass.classList.remove("show_error");


      localStorage.setItem('username', userNameVal)
      console.log("Entered Email is: ", userNameVal);
      console.log("Entered Password is: ", passwordVal);
      window.location.href = "page2.html";
    } else {
      errorPass.classList.add("show_error");
      errorPass.textContent = "Invalid Login Credential";
    }
  }
});
