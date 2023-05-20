let regularExpreDigit = /^\d$/;

const regularExpreDot = /^[.]$/;

const regularExpreIsDotInText = /^[^.].[^.]$/;

function matchPattern(rE, value){
    return rE.test(value);
}
function isDigit(value){
    return matchPattern(regularExpreDigit, value);
}

function isDot(value){
    return matchPattern(regularExpreDot, value);
}

function isDotInText(value){
    return matchPattern(regularExpreIsDotInText, value);
}