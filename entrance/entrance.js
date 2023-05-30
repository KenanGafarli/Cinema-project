let entranceLogin=document.querySelector('.entrance_login')

let entranceSign=document.querySelector('.entrance_sign')

if(localStorage.getItem('loggedInUser')) {
    window.location.href='../index.html';
}

entranceLogin.addEventListener('click',()=>{
    window.location.href='../login/login.html'
})


entranceSign.addEventListener('click',()=>{
    window.location.href='../register/register.html'
})