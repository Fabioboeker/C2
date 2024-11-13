// Codigo original

function gerarAleatorios() {
    var vetor = [];

    while (vetor.length < 6) {
        var aleatorio = Math.floor(Math.random() * 60) + 1;
        if (!vetor.includes(aleatorio)) {
            vetor.push(aleatorio);
        }
    }

    return vetor;
}

// Codigo Otimizado

function gerarAleatoriosOtimizado(quantidade) {
    const numeros = Array.from({ length: 60 }, (_, index) => index + 1);

    for (let i = numeros.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = numeros[i];
        numeros[i] = numeros[j];
        numeros[j] = temp;
    }

    return numeros.slice(0, quantidade);
}