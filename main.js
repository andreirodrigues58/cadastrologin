function mostrarSenha(){
    let inputPass = document.getElementById('SenhaLogin')
    let btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
      
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }
    else{
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    }
}

let loginError = document.querySelector('#loginError');
let loginSucess = document.querySelector('#loginSucess');

function fazerLogin(){
     const user = document.getElementById('UserLogin').value
     const senha = document.getElementById('SenhaLogin').value;

     const listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
     const usuarioValido = listaUser.find((item) => {
        return item.userCad === user && item.senhaCad === senha;
    });


    if (usuarioValido) {
        loginSucess.setAttribute('style', 'display:block; color: green');
        loginSucess.innerHTML = '<strong>Login validado. Redirecionando usuário...</strong>';
        loginError.setAttribute('style', 'display:none');

        setTimeout(()=> {
            window.location.href = 'index2.html'
           }, 3000)
    } else {
        loginError.setAttribute('style', 'display:block; color: red');
        loginError.innerHTML = '<strong>Usuário ou senha inválidos</strong>';
        loginSucess.setAttribute('style', 'display:none');;
    }
}