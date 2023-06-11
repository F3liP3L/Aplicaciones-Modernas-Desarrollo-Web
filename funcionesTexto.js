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

function isAddition(value){
    return config.ADDITION === value;
}

function isDotInText(value){
    return matchPattern(regularExpreIsDotInText, value);
}

function isEmptyOrNull(value){
    return getTrimDefaultValue(value, config.EMPTY) === config.EMPTY;
}

function getTrimDefaultValue(value, defaultValue){
    return (value === null) ? defaultValue : value.trim();
}

function getTrimValue(value){
    return getTrimDefaultValue(value,config.EMPTY);
}

function contains(string, value){
    return getTrimValue(string).indexOf(getTrimValue(value)) !== -1;
}