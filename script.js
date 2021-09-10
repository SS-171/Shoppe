const widthE = document.querySelector('.header-with-search');
const logout = document.querySelector('.js-log-out');
const register = document.querySelector('.auth-form .auth-form__switch-btn');
const login = document.querySelector('.register__form .auth-form__switch-btn');
const back = document.querySelectorAll('#commit');
const registerForm = document.querySelector('.register__form');
const authForm =document.querySelector('.auth-form');
const overlay = document.querySelector('.modal__overlay');
const modalBody = document.querySelector('.modal__body')
let root = document.documentElement;
root.addEventListener('mousemove', e =>{
    root.style.setProperty('--header-with-search-width',widthE.offsetWidth + 'px' )
})

function registerShow(){
    registerForm.style.display = "block";
    authForm.style.display = "none";
}
function loginShow(){
    registerForm.style.display = "block";
    authForm.style.display = "none";
}
function hideForm() {
    registerForm.style.display = "none";
    authForm.style.display = "none";
}
logout.onclick = function(){
    registerShow();
}
register.onclick = function(){
    registerShow();
}
login.onclick  =function() {
    loginShow();
}
login.onclick = function() {
    authForm.style.display = "block";
    registerForm.style.display = "none";
}

back.forEach(function(btn){
    btn.onclick = function(){
        hideForm();
    }
})

document.onclick = function(event) {
    if(event.target.closest('.modal')){
        if(!event.target.closest('.modal__body')){
            hideForm();
        }
    }
}