//Herramienta para leer
import * as fs from 'fs';
//Agregando una variable con el archivo a leer
const archivoporleer = process.argv[2]
//extrae la data en una variable
const archivoleido = fs.readFileSync(archivoporleer);
//imprime la variable con la info del documento
console.info(archivoleido.toString());