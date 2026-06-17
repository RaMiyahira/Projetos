function printarNome(){
    console.log("Rafael"); 
}

const somaVar = function soma(val1, val2){
    return val1 + val2;
}

function sub(val1, val2){
    return val1 - val2;
}

function calcular(func1, func2){
    return func1 + func2;
}

printarNome()
console.log(somaVar(4, 12));
console.log(calcular(sub(10, 5), somaVar(20, 15)))