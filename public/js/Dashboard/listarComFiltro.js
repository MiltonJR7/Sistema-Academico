

document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById("btnBuscar").addEventListener('click', carregarDados);
    carregarDados();

    function carregarDados() {
        let query = "";
        let termo = document.getElementById("busca");
        if(termo.value != "") {
            query = "?termo=" + termo.value;
        }

        fetch("/admin/dashboard/listar" + query)
        .then((res)=> {
            return res.json();
        })
        .then((corpo)=> {
            let html = "";

            if(corpo.lista.length > 0) {
                
                for(let i = 0; i < corpo.lista.length; i++) {
                    console.log(corpo.lista[0]);

                    let item = corpo.lista[i];

                    html += `
                        <tr>
                            <td>${item.id}</td>
                            <td>${item.nome}</td>
                            <td>${item.email}</td>
                            <td>${item.senha}</td>
                            <td>${item.perfil}</td>
                        </tr>
                    `
                }
                document.querySelector("#usuarios > tbody").innerHTML = html;
            }
        })
    }
})