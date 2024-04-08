 const botaoMosrtrarProjetos = document.querySelector('.btn-mostrar-projetos'); 
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMosrtrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMosrtrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativos => {
        projetosInativos.classList.add('ativo');
    });
}
