const idTdDisplay = "tdPantalla";

function controlarEvento(element){

    let text =  getText(element);

    if(isDigit(text)){
        setNumber(text);
    } else if(isDot(text)){
        setDot();
    }
}

function setNumber(text){
    setText(idTdDisplay, getTextById(idTdDisplay) + text);
}

function setDot(){

    let currentText = getTextById(idTdDisplay);
    if(contains(currentText, ".")){
        showMessage("Ya ha colocado un punto.");
    } else if(isEmptyOrNull(currentText)){
        setText(idTdDisplay,"0.")
    } else {
        setText(idTdDisplay, getTextById(idTdDisplay) + ".");
    }
}