const valorConta = 255;
const percentualGorjeta = 5;
const totalGorjeta = (valorConta * (percentualGorjeta / 100));
const totalPago = totalGorjeta + valorConta;

console.log(`Valor da Conta: ${valorConta}, Gorjeta (15%): ${totalGorjeta}, Total a pagar: ${totalPago}`); 