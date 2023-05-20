let arrayNumbers= []

function sumar(array){
    return array.reduce((acumulador, valorActual) => acumulador + valorActual);
}

function restar(array){
    return array.reduce((acumulador, valorActual) => acumulador - valorActual);
}

function multiplicar(array){
    return array.reduce((acumulador, valorActual) => acumulador * valorActual);
}

function dividir(array){
    return array.reduce((acumulador, valorActual) => acumulador / valorActual);
}
