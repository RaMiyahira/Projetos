const valorConta = 100;
const percentualGorjeta = 15;
const totalGorjeta = (valorConta * (percentualGorjeta / 100));
const totalPago = totalGorjeta + valorConta;

console.log(`Valor da Conta: ${valorConta}, Gorjeta (15%): ${totalGorjeta}, Total a pagar: ${totalPago}`); 