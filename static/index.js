const pessoa = {
    ironico: someJavaScriptVar2,
    rindo: someJavaScriptVar,
    frase1: someJavaScriptVar3,
    frase2: someJavaScriptVar4,
}

function atualizarHumor() {
    const elementoImagem = document.getElementById('imagem');
    const blocoHumor = document.getElementById('bloco_humor');
    
    if (pessoa.mudanca) {
        elementoImagem.src = pessoa.ironico;
        blocoHumor.innerText = pessoa.frase2;
        

    } else {
        elementoImagem.src = pessoa.rindo;
        blocoHumor.innerText = pessoa.frase1;
    }
}

atualizarHumor();

const botaoAlterarHumor = document.getElementById('alterarHumor');
botaoAlterarHumor.addEventListener('click', function () {
    pessoa.mudanca = !pessoa.mudanca;
    atualizarHumor();
});