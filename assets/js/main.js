"strict mode"
const logoLink = document.querySelector('[data-logoLink]');
logoLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({top: 0, behavior: 'smooth'});
});

const filtros = document.querySelectorAll('[data-filtro]');
const cardapio = document.querySelectorAll('[data-grupo]');

filtros.forEach(filtro => filtro.addEventListener('click', (elemento) => {
    mostraCardapio(elemento.target.dataset.filtro);
    mudaChipAtivo(elemento.target.dataset.filtro);
}));

function mostraCardapio(filtro){
    cardapio.forEach(elemento => elemento.classList.add('invisivel'));
    
    if(filtro === 'tudo'){
        cardapio.forEach(elemento => elemento.classList.remove('invisivel'));
        return;
    }

    cardapio.forEach(elemento => {
        if(elemento.dataset.grupo === filtro){
            elemento.classList.remove('invisivel');
        }
    });
}

function mudaChipAtivo(chip) {
    filtros.forEach(elemento => elemento.classList.remove('cardapio__chip--ativo'));

    filtros.forEach(elemento => {
        if(elemento.dataset.filtro === chip){
            elemento.classList.add('cardapio__chip--ativo');
        }
    });
}
