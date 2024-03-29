let arrayNumbers= []

function additionOnlyTwoNumbers(a, b) {
    return a + b;
}

function addition(array){
    return array.reduce((accumulator, valorActual) => accumulator + valorActual);
}

function subtract(array){
    return array.reduce((acumulador, valorActual) => acumulador - valorActual);
}

function multiply(array){
    return array.reduce((acumulador, valorActual) => acumulador * valorActual);
}

function division(array){
    return array.reduce((acumulador, valorActual) => acumulador / valorActual);
}

function convertNumber(value) {
    if(isInt(value)) {
        return parseInt(value, 10);
    } else if(isDecimal(value)) {
        return parseFloat(value);
    } else {
        return 0;
    }
}