const idTdPantalla = "tdPantalla";

function controlarEvento(element){

    let text =  getText(element);

    if(isDigit(text)){
        setNumber(text);
    } else if(isDot(text)){
        setDot();
    }
}

function setNumber(text){
    setText(idTdPantalla, getTextById(idTdPantalla) + text);
}

function setDot(){

    let currentText = getTextById(idTdPantalla);
    if(contains(currentText, ".")){
        showMessage("Ya ha colocado un punto.");
    } else if(isEmptyOrNull(currentText)){
        setText(idTdPantalla,"0.")
    } else {
        setText(idTdPantalla, getTextById(idTdPantalla) + ".");
    }
}