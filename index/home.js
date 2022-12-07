let loginModalForgotPasswordBtn = document.getElementById("loginModalForgotPasswordBtn")

let loginModalCloseBtn = document.getElementById("loginModalCloseBtn")


loginModalForgotPasswordBtn.addEventListener("click", () => loginModalCloseBtn.click())


let forgotPassLoginBtn = document.getElementById("forgotPassLoginBtn")
let forgotPasswordModalCloseBtn = document.getElementById("forgotPasswordModalCloseBtn")

forgotPassLoginBtn.addEventListener("click", () => {
    forgotPasswordModalCloseBtn.click()

})