let valordoCarro = Number(prompt("Insira o valor do carro"));
let formadepagamento = prompt("Forma de pagamento:\n1- PIX\n2- Cartão\n3- Financiamento"); // Removi o Number() para comparar como string

let valorFinal, parcelas;

if (formadepagamento === "1") {
    // 15% de desconto
    valorFinal = valordoCarro * 0.85;
    alert("Valor final com desconto (PIX): R$ " + valorFinal.toFixed(2));

} else if (formadepagamento === "2") {
    // 5% de acréscimo
    valorFinal = valordoCarro * 1.05;
    parcelas = Number(prompt("Em quantas vezes vai parcelar (até 24 vezes)?"));
    let valorParcela = valorFinal / parcelas;
    alert("Valor final (Cartão): R$ " + valorFinal.toFixed(2) + "\nValor de cada parcela: R$ " + valorParcela.toFixed(2));

} else if (formadepagamento === "3") {
    // 20% de acréscimo
    valorFinal = valordoCarro * 1.20;
    alert("Valor final (Financiamento): R$ " + valorFinal.toFixed(2));

} else {
    alert("Opção de pagamento inválida.");
}