// import {getFormValues} from "./index"

const userNameDiv = document.getElementById("username")
const userEmail = localStorage.getItem('email')

const userName = userEmail.split('@')
userNameDiv.textContent = userName[0]

