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
    setText(idTdPantalla, getTextById(idTdPantalla) + ".");
}