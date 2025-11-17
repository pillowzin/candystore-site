const btn = document.getElementById("verMaisBtn");
const extra = document.getElementById("cardapioExtra");

btn.addEventListener("click", () => {
    const fechado = extra.classList.contains("escondido");

    if (fechado) {
        extra.classList.remove("escondido");
        extra.classList.add("aberto");

        btn.textContent = "Fechar cardápio";
        btn.classList.add("ativo");   // animação opcional no botão
    } else {
        extra.classList.remove("aberto");
        extra.classList.add("escondido");

        btn.textContent = "Ver cardápio completo";
        btn.classList.remove("ativo");
        
        // rola a tela de volta até perto do botão (mobile)
        if (window.innerWidth < 500) {
            btn.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }
});
