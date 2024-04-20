/* Objetivo 1 - quando o usúario clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

Passo 1 - pegar o botão mostar mais no JS pra poder verificar quando o usúario clicar em cima dele

Passo 2 - indentificar o clique do botão

Passo 3 - adicionar a classe ativo nos projetos escondidos 

objetivo 2 - esconder o botão de mostar mais 
Passo 1 - pegar o botão e o esconde-lo 
*/


// Objetivo 1 - quando o usúario clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

// Passo 1 - pegar o botão mostar mais no JS pra poder verificar quando o usúario clicar em cima dele

const botaoMostarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
botaoMostarProjetos.addEventListener('click', () => {
    console.log('teste');
    //Passo 3 - adicionar a classe ativo nos projetos escondidos 
    projetosInativos.forEach(projetoInativo =>{
        projetoInativo.classList.add('ativo');
    }) 

    //objetivo 2 - esconder o botão de mostar mais 

    //Passo 1 - pegar o botão e o esconde-lo 
    botaoMostarProjetos.classList.add("remover");
});

function newFunction() {
    projetosInativos.forEach(projetoInativo => {
        console.log(projetoInativo);
        projetoInativos.classList.add('ativo');
    });
}
