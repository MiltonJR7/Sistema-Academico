

document.addEventListener("DOMContentLoaded", ()=> {
    const btn = document.getElementById('btnLogar');
    btn.addEventListener('click', login);

    function login() {
        const email = document.getElementById('email');
        const senha = document.getElementById('senha');
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let listaValidar = [];

        if(email.value === "" || !regexEmail.test(email.value)) { listaValidar.push(email); } else { email.style.borderColor = "#4b6cb7"; }
        if(senha.value === "" || senha.value.length < 6) { listaValidar.push(senha); } else { senha.style.borderColor = "#4b6cb7"; }

        if(listaValidar.length === 0) {
            limpar();

            let obj = {
                email: email.value,
                senha: senha.value
            }

            fetch("/user/login", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(obj)
            })
            .then((res)=> {
                return res.json();
            })
            .then((corpo)=> {
                if(corpo.ok) {
                    window.location.href = "/dashboard";
                } else {
                    notAccount(email, senha);
                }
            })

        } else {
            for(let i = 0; i < listaValidar.length; i++) {
                listaValidar[i].style.borderColor = "red";
            }
            exibirErros(email, senha);
        }
    }

    function exibirErros(email, senha) {
        limpar();
        const emailError = document.getElementById('errorEmail');
        const senhaError = document.getElementById('errorSenha');
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(email.value === "" && senha.value === "") {
            emailError.innerHTML = "<p style='color: red; margin: 0 !important; padding: 0 !important;'>Email invalido!</p>";
            senhaError.innerHTML = "<p style='color: red; margin: 0 !important; padding: 0 !important;'>Senha invalida!</p>";
        } else if(email.value === "") {
            emailError.innerHTML = "<p style='color: red; margin: 0 !important; padding: 0 !important;'>Email invalido!</p>";
            senhaError.innerHTML = "<p style='margin: 0 !important; padding: 0 !important;'></p>";
        } else if(!regexEmail.test(email.value)){
            emailError.innerHTML = "<p style='color: red; margin: 0 !important; padding: 0 !important;'>Email invalido!</p>";
            senhaError.innerHTML = "<p style='color: red; margin: 0 !important; padding: 0 !important;'>Senha invalida!</p>";
        } else if(senha.value === "") {
            senhaError.innerHTML = "<p style='color: red; margin: 0 !important; padding: 0 !important;'>Senha invalida!</p>";
            emailError.innerHTML = "<p style='margin: 0 !important; padding: 0 !important;'></p>";
        }
    }

    function notAccount(email, senha) {
        const inputCard = document.getElementById('cardLogin');
        const errorAccount = document.getElementById('errorAccount');

        errorAccount.innerHTML = "<p style='color: red;'>Email ou senha inválidos.</p>"
        inputCard.style.border = "1px solid red";
        email.value = "";
        senha.value = "";
    }

    function limpar() {
        const emailError = document.getElementById('errorEmail');
        const senhaError = document.getElementById('errorSenha');
        const inputCard = document.getElementById('cardLogin');
        const errorAccount = document.getElementById('errorAccount');

        emailError.innerHTML = "<p style='margin: 0 !important; padding: 0 !important;'></p>";
        senhaError.innerHTML = "<p style='margin: 0 !important; padding: 0 !important;'></p>";
        inputCard.style.border = "0px solid";
        errorAccount.innerHTML = "<p style='margin: 0 !important; padding: 0 !important;'></p>"
    }
}) 