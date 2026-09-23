const caixa = document.querySelectorAll('.caixa');
const botao1 = document.getElementById('botão1');
const botao2 = document.getElementById('botão2');
caixa.forEach((caixa) => {
    caixa.addEventListener('click', function(){
        this.style.border = '2px solid green';
    })
})