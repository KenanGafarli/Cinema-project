let regName= document.querySelector('.reg_name')
let regEmail= document.querySelector('.reg_email')
let regPsw= document.querySelector('.reg_psw')
let regTypePsw= document.querySelector('.reg_type_psw')
let regErr=document.querySelector('.reg_err')
let entranceSign= document.querySelector('.entrance_sign')

if(localStorage.getItem('loggedInUser')) {
    window.location.href='../index.html';
}

function redSubmit(e) {
    e.preventDefault();

    let checkNewUser=users.find(data=>data.email===regEmail.value);
    if(!checkNewUser) {
        if(regTypePsw.value===regPsw.value) {
            const newUser = {
                id: users.length+1,
                name: regName.value,
                email: regEmail.value,
                password: regPsw.value
    
            }
    
            users.push(newUser);
            regErr.innerHTML=`Qeydiyyat Ugurla Bitdi`
            localStorage.setItem('users', JSON.stringify(users))
        }else{
            regErr.innerHTML=`Sifreler Eyni Deyil`
        }
    }else {
        regErr.innerHTML=`Bu Istifadeci Movcuddur`
    }
}

entranceSign.addEventListener('click', ()=> {
    window.location.href='../login/login.html'
})