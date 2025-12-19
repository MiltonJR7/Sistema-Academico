document.addEventListener("DOMContentLoaded", () => {

    const botoes = document.querySelectorAll(".rotaDash");
    const paginas = document.querySelectorAll(
        "#inicial-page, #admin-page, #students-page, #teachers-page, #classes-page"
    );

    botoes.forEach(botao => {
        botao.addEventListener("click", function (e) {
            e.preventDefault();
            
            const pageId =
                this.dataset.idpageincial ||
                this.dataset.idpageadmin ||
                this.dataset.idpagealunos ||
                this.dataset.idpageprofessores ||
                this.dataset.idpageturmas;

            if (!pageId) return;

            paginas.forEach(pagina => {
                pagina.style.display = "none";
            });

            const paginaAtiva = document.getElementById(pageId);
            if (paginaAtiva) {
                paginaAtiva.style.display = "block";
            }

            botoes.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
        });
    });

});
