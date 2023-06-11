const fs = require("fs");

const routConfig = "./resources/constantes.json";


function readJson(route){
  try{
    return require(route);
  } catch(error){
    throw error;
  }
}

const config = readJson(routConfig);

module.exports = {
  config
};
