"use strict";
exports.__esModule = true;
var fs = require("fs");
// En esta parte pones lo que tu quieres para mostrar
//                           |
//                           V
var parametro = "AQUI VA EL PARAMETRO A COPIAR";
// este archivo se usará para mostrar el texto
var archivoparametro = "parametro.txt";
// se copia en el archivo el texto que se ha ingresado en la variable parámetro
fs.writeFileSync(archivoparametro, parametro);
var archivoparametrocontenido = fs.readFileSync(archivoparametro, 'utf8');
console.log(archivoparametrocontenido);
//vacio el archivo para próximos usos
var parametroreset = "";
fs.writeFileSync(archivoparametro, parametroreset);
