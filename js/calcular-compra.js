function calcularTotalCompra(precoUnitario, quantidade, descontoPercentual = 0) {
    const subtotal = precoUnitario * quantidade;
    const desconto = subtotal * (descontoPercentual / 100);
    const total = subtotal - desconto;

    return total;
}

// Exemplos de uso:
console.log(calcularTotalCompra(50, 3));               // Sem desconto: 150
console.log(calcularTotalCompra(100, 2, 10));          // Com 10% de desconto: 180
