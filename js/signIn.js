import {auth, signInWithEmailAndPassword,createUserWithEmailAndPassword} from "./firebase.js"

const logInBTN = document.getElementById("logIn")
const signUpBTN = document.getElementById("signUp")
const authForm = document.getElementById("authForm")

let lastBTNclicked = "logIn"
logInBTN.addEventListener("click",()=>{
  lastBTNclicked = "logIn"
})
signUpBTN.addEventListener("click",()=>{
  lastBTNclicked = "signUp"
})

authForm.addEventListener("submit",async(event)=>{
  event.preventDefault()

  const formData = new FormData(event.target)
  const email = formData.get("uname")
  const password = formData.get("psw")

  let userCredentials
  if(lastBTNclicked=="logIn"){
    userCredentials = await signInWithEmailAndPassword(auth,email,password)
  }else{
    userCredentials = await createUserWithEmailAndPassword(auth,email,password)
  }
  alert(userCredentials.user.email+" has logged In ")
  window.location.href = "index.html"

})