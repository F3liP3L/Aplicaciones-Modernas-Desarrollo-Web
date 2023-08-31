const idTdDisplay = "tdPantalla";
let lastOperator = "";
let numberOne = "";
let numberTwo = "";

function controlEvent(element){

    let text =  getText(element);

    if(isDigit(text)){
        setNumber(text);
    } else if(isDot(text)){
        setDot();
    } else if(isMathOperator(text)) {
        operate(text);
    }
}

function setNumber(text){
    setText(idTdDisplay, getTextById(idTdDisplay).concat(text));
}

function setDot(){

    let currentText = getTextById(idTdDisplay);
    if(contains(currentText, ".")){
        showMessage("Ya ha colocado un punto.");
    } else if(isEmptyOrNull(currentText)){
        setText(idTdDisplay,"0.")
    } else {
        setText(idTdDisplay, currentText.concat("."));
    }
}

// TODO pendiente de revisión debido a como estan construidas las funciones de operación.      
function operate(operator) {
    
    if(isEmptyOrNull(numberOne)) {
        numberOne = adjustNumber(getTextById(idTdDisplay));
        lastOperator = operator;
    } else if(isEmptyOrNull(numberTwo)) {
        numberTwo = adjustNumber(getTextById(idTdDisplay));
        numberOne = additionOnlyTwoNumbers(numberOne, numberTwo);
        numberTwo = empty;
        lastOperator = empty
        alert(numberOne);
    } 
    
    setText(idTdDisplay, empty);
}

function adjustNumber(value) {
    
    let returnValue = value;
    
    if(isEmptyOrNull(value)) {
        returnValue = "0";
    } else if(isDot(value)) {
        returnValue = "0";
    } else if(isDot(getLastCharacter(value))) {
        returnValue += "0";
    }

    return returnValue;
}
