let valorPedido = parseFloat(prompt("Digite o valor do pedido:"));

if (isNaN(valorPedido)) {
    alert("Digite um valor válido!");
} else if (valorPedido > 50) {
    let fidelidade = prompt("Possui cartão fidelidade? (sim/não)");

    if (fidelidade.toLowerCase().trim() === "sim") {
        let total = valorPedido * 0.90;
        alert("Total com desconto: R$ " + total.toFixed(2));
    } else {
        alert("Total: R$ " + valorPedido.toFixed(2) +       "\nVocê ganhou um cookie de brinde!");
    }
} else {
    alert("Total: R$ " + valorPedido.toFixed(2));
}