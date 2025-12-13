

document.addEventListener("DOMContentLoaded", ()=> {
    const btn = document.getElementById('btnLogar');
    btn.addEventListener('click', cadastrar);

    function cadastrar() {
        const email = document.getElementById('email');
        const senha = document.getElementById('senha');
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let listaValidar = [];

        if(email.value === "" || !regexEmail.test(email)) { listaValidar.push(email); } else { email.style.borderColor = "#4b6cb7"; }
        if(senha.value === "" || senha.length < 6) { listaValidar.push(senha); } else { senha.style.borderColor = "#4b6cb7"; }

        if(listaValidar.length === 0) {

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
                    window.location.href = "/admin/dashboard";
                } else {
                    alert("Error in login!!!");
                }
            })

        } else {
            for(let i = 0; i < listaValidar.length; i++) {
                listaValidar[i].style.borderColor = "red";
            }
        }
    }
})