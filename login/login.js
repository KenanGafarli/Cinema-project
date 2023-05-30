let entranceSign = document.querySelector('.entrance_sign');
let logEmail= document.querySelector('.log_email')
let logPsw= document.querySelector('.log_psw')
let logErr =document.querySelector('.log_err')


if(localStorage.getItem('loggedInUser')) {
    window.location.href='../index.html';
}
entranceSign.addEventListener('click', ()=> {
    window.location.href='../register/register.html'
})



function logSubmit(e) {
    e.preventDefault();
    let checkUser=users.find(data=> data.email===logEmail.value);
    if(checkUser) {
        if(checkUser.password===logPsw.value) {
            localStorage.setItem('loggedInUser',JSON.stringify(checkUser));
            window.location.href='../index.html';
        }else {
            logErr.innerHTML=`Sifre yanlisdir`
        }
    }else {
        logErr.innerHTML=`Istifadeci Tapilmadi`
    }
}