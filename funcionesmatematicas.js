let arrayNumbers= []

function addition(array){
    return array.reduce((acumulador, valorActual) => acumulador + valorActual);
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
