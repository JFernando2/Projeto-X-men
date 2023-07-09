
/* passo 1 = pegar os persongagens no JS para poder verificar
 quando o usuario passar o mouse em cima de um deles */

const personagens = document.querySelectorAll('.personagem')

/* passo 2 = adicionar a classe selecionado no personagem que 
o usuário oassar o curso do mouse */

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        /* passo 3 = verificar se já existe um personagem selecionado, se sim,
        devemos remover a seleção dele */
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado');

        /* Objetivo 2 = quando passar o mouse em cima, fazer a troca da imagem
        grande, nome e descrição */

        /* passo 1 = pegar o elemento do personagem grande para adicionar as
        informações nele */
        const imgPersonagemGrande = document.querySelector('.personagem-grande');

        /*passo 2 = alterar a imagem do personagem grande*/
        const idPersonagem = personagem.attributes.id.value;
        imgPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`

        /* passo 3 = alterar nome do personagem grande */
        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');

        /* passo 4 = alterar a descrição do personagem */
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})

