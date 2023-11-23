function somatorioMultiplos3e5() {
    const numero = parseInt(prompt("Digite um número inteiro positivo:"));

    if (isNaN(numero) || numero <= 0) {
        console.log("Por favor, digite um número inteiro positivo válido.");
        return;
    }
    let somatorio = 0;

    for (let i = 1; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
        }
    }

    console.log(`O somatório dos múltiplos de 3 ou 5 menores que ${numero} é: ${somatorio}`);
}

somatorioMultiplos3e5();
