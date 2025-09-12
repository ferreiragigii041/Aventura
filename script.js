const avanca = document.querySelectorAll(".btn-proximo");
const reiniciarBtn = document.getElementById("btn-reiniciar");

avanca.forEach(button => {
    button.addEventListener("click", function(){
        const atual = document.querrySelector(".ativo");
        const proximoPasso = "passo-"+this.getAttribute("data-proxima");
    })
}

)