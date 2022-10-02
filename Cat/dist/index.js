"use strict";
exports.__esModule = true;
var fs = require("fs");
var archivoporleer = "archivoporleer.txt";
var archivoleido = fs.readFileSync(archivoporleer, 'utf8');
console.log(archivoleido);
