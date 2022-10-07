"use strict";
exports.__esModule = true;
//Herramienta para leer
var fs = require("fs");
//Agregando una variable con el archivo a leer
var archivoporleer = process.argv[2];
//extrae la data en una variable
var archivoleido = fs.readFileSync(archivoporleer);
//imprime la variable con la info del documento
console.info(archivoleido.toString());
