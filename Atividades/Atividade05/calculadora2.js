
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Qual o valor da conta?", (resposta) => {
    const valorConta = Number(resposta);
    rl.question("Qual o percentual da gorjeta?", (resposta2) => {
    const percentualGorjeta = Number(resposta2);
    const totalGorjeta = (valorConta * (percentualGorjeta / 100));
    const totalPago = totalGorjeta + valorConta;
    console.log(`Valor da Conta: R$${valorConta}, Gorjeta (${percentualGorjeta}%): R$${totalGorjeta}, Total a pagar: R$${totalPago}`); 
    rl.close();
    });
});