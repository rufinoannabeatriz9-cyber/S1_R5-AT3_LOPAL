let idade = Number(prompt("Digite sua idade:"));
let estudante = prompt("Você é estudante? (sim/não)");

let valor = 40;

if (idade < 12 || idade > 60 || estudante === "sim") {
    valor = 20;
}

alert("Valor do ingresso: R$ " + valor.toFixed(2));