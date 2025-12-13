
document.addEventListener('DOMContentLoaded', ()=> {
    const btn = document.getElementById('btnRegister');
    btn.addEventListener('click', registrar);

    function registrar() {
        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const senha = document.getElementById('senha');
        const confSenha = document.getElementById('confSenha');
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let listaValidar = [];

        if(nome.value === "") { listaValidar.push(nome); } else { nome.style.borderColor = "#4b6cb7"; }
        if(email.value === "" || !regexEmail.test(email.value)) { listaValidar.push(email); } else { email.style.borderColor = "#4b6cb7"; }
        if(senha.value === "" || senha.value !== confSenha.value || senha.value.length < 6) { listaValidar.push(senha); listaValidar.push(confSenha)} else { senha.style.borderColor = "#4b6cb7"; confSenha.style.borderColor = "#4b6cb7";}

        if(listaValidar.length == 0) {

            let obj = {
                nome: nome.value,
                email: email.value,
                senha: senha.value
            }

            fetch('/user/register', {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(obj)
            })
            .then((res), ()=> {
                return res.json();
            })
            .then((corpo), ()=> {
                if(corpo.ok) {
                    alert("Usuario registrado com sucesso!");
                    window.location.href = "/user/login";
                } else {
                    alert("ERROR IN INPUTS!!!");
                }
            })

        } else {
            for(let i = 0; i < listaValidar.length; i++) {
                listaValidar[i].style.borderColor = "red";
            }
        }
    }
})