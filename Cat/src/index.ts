//Herramienta para leer
import * as fs from 'fs';
//Agregando una variable con el archivo a leer
let archivoporleer: string = "archivoporleer.txt"
//extrae la data en una variable
let archivoleido = fs.readFileSync(archivoporleer, 'utf8');
//imprime la variable con la info del documento
console.log(archivoleido);