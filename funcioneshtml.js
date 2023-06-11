function showResult(result){
    alert(result);
}

function getElementById(id){
    return document.getElementById(id);
}

function getText(element){
    return element.innerText;
}

function getTextById(id){
    return getElementById(id).innerText;
}

function setText(id, text){
    let element = document.getElementById(id);
    element.innerText = text;
}

function showMessage(message){
    alert(getTrimValue(message));
}