import * as fs from 'fs';
// En esta parte pones lo que tu quieres para mostrar
//                           |
//                           V
let parametro: string="AQUI VA EL PARAMETRO A COPIAR"
// este archivo se usará para mostrar el texto
const archivoparametro: string = "parametro.txt";
// se copia en el archivo el texto que se ha ingresado en la variable parámetro
fs.writeFileSync(archivoparametro, parametro);
let archivoparametrocontenido = fs.readFileSync(archivoparametro, 'utf8')
console.log(archivoparametrocontenido)
//vacio el archivo para próximos usos
let parametroreset: string="";
fs.writeFileSync(archivoparametro, parametroreset)
