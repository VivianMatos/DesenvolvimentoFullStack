function calcularMediaNotas(notas) {
    // Filtra apenas números válidos (ignorando null, undefined, strings, etc)
    const notasValidas = notas.filter(nota => typeof nota === 'number' && !isNaN(nota));

    if (notasValidas.length === 0) {
        return "Nenhuma nota válida fornecida.";
    }

    const soma = notasValidas.reduce((total, nota) => total + nota, 0);
    const media = soma / notasValidas.length;

    return `Média das notas: ${media.toFixed(2)}`;
}

// Exemplos de uso:
console.log(calcularMediaNotas([8, 9.5, null, 10, "7", undefined, 6])); // Deve ignorar valores inválidos
