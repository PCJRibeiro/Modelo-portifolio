const botoes= document.querySelectorAll('.botao') 

const Abas = document.querySelectorAll(".site");

botoes.forEach((botao, indice)=>{
    botao.addEventListener('click', ()  => {

        const botaoSelecinado = document.querySelector(".botao.selecionado");
        botaoSelecinado.classList.remove("selecionado")


        botao.classList.add("selecionado");


        const abaSelecionada = document.querySelector(".site.selecionado");
        abaSelecionada.classList.remove("selecionado");

        Abas[indice].classList.add("selecionado");      
    });
}) 