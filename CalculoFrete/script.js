let valorCompra = Number(prompt("Valor da compra:"));
let regiao = prompt("Região: 1-Sul, 2-Sudeste, 3-Outras");
let frete = 0;

if (valorCompra > 250) {
    frete = 0;
} else {
    if (regiao === '2') frete = 10;
    else if (regiao === '1') frete = 20;
    else frete = 30;
}

let totalGeral = valorCompra + frete;
alert(`Compra: R$ ${valorCompra.toFixed(2)} | Frete: R$ ${frete.toFixed(2)}`);
alert(`Total: R$ ${totalGeral.toFixed(2)}`);