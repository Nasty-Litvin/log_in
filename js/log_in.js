const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');
const sendButton = document.querySelector('.forgot_password')
const form = document.getElementById('form_log_in')

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});


form.addEventListener('submit', sendForm)
function sendForm(form) {
    let login = document.getElementById('login')
    const password = document.getElementById('password')
    const divInvalid = document.getElementById('invalid')
    if (!password.value || !login.value) {
        divInvalid.style.display = 'block'
        form.preventDefault()
    } 

}