let regularExpreDigit = /^\d$/;

const regularExpreInt = /^\d+$/;

const regularExpreDecimal = /^\d+[.]\d+$/;

const regularExpreDot = /^[.]$/;

const regularExpreIsDotInText = /^[^.].[^.]$/;


const {config} = require("./funcionesConfiguraciones.js");


const EMPTY = config.EMPTY;
const ZERO = config.ZERO;

function matchPattern(rE, value){
    return rE.test(value);
}

function isDigit(value){
    return matchPattern(regularExpreDigit, value);
}

function isDot(value){
    return matchPattern(regularExpreDot, value);
}

function isInt(value){
    return matchPattern(regularExpreInt, value);
}

function isDecimal(value){
    return matchPattern(regularExpreDecimal, value);
}

function isAddition(value){
    return config.ADDITION === value;
}

function isSubtraction(value) {
    return config.SUBTRACTION === value;
}

function isMultiplication(value) {
    return config.PRODUCT === value;
}

function isDivision(value) {
    return config.DIVISION === value;
}

function isDotInText(value){
    return matchPattern(regularExpreIsDotInText, value);
}

function isEmptyOrNull(value){
    return getTrimDefaultValue(value, EMPTY) === EMPTY;
}

function getTrimDefaultValue(value, defaultValue){
    return (value === null || value === undefined) ? defaultValue : value.trim();
}

function getTrimValue(value){
    return getTrimDefaultValue(value, EMPTY);
}

function isMathOperator(value) {
    return isAddition(value) || isSubtraction(value) || isMultiplication(value) || isDivision(value);
}

function contains(string, value){
    return getTrimValue(string).indexOf(getTrimValue(value)) !== -1;
}

function getLastCharacter(value) {
    return getTrimValue(getTrimValue(value).at(-1));
}
