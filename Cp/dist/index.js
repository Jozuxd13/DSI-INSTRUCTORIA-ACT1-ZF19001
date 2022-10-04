"use strict";
exports.__esModule = true;
var fs = require("fs");
// ---------------------------------|     AQUI PON TU DOCUMENTO A COPIAR, DEBES
//                                  V           PONERLO DENTRO DE LA CARPETA CP
var archivo1 = 'documento1.txt';
// Extrae el contenido dentro de primerdocumento en una variable
var contenidoarch1 = fs.readFileSync(archivo1, 'utf8');
// AQUI SE PIDE EL SEGUNDO DOCUMENTO, SI LO TIENE AGREGARLO
//                       AQUÍ
//                        |
//                        |
//                        V
var archivo2 = '';
//consulta si hay un segundo documento
if (fs.existsSync(archivo2)) {
    console.log("SE COPIARA DE DOCUMENTO A DOCUMENTO");
    // Extrae el contenido dentro de segundodocuemnto pero en una variable
    var contenidoarch2 = fs.readFileSync(archivo2, 'utf8');
    // Se manda la data del primer documento y se escribe en el segundo documento
    fs.writeFileSync(archivo2, contenidoarch2 + " " + contenidoarch1);
    var archivofinalA = fs.readFileSync(archivo2, 'utf8');
    // muestra la informacion del segundo archivo
    console.log("Este es el contenido nuevo de " + archivo2 + ":");
    console.log(archivofinalA);
}
else {
    if (archivo2 !== "") {
        // se crea un segundo archivo que previamente no existia
        // aunque supuestamente si existia.
        fs.writeFileSync(archivo2, contenidoarch1);
        var archivofinalB = fs.readFileSync(archivo2, 'utf8');
        console.log("Su archivo llamado " + archivo2 + " no se encontraba :(");
        console.log("pero te he creado uno con ese nombre :)");
        console.log("Este es su contenido:");
        // muestra la informacion del segundo archivo
        console.log(archivofinalB);
    }
    else {
        // se copiará el formato del archivo
        //
        //  OJO: ESTE PROYECTO TRABAJA MAYORMENTE CON .TXT,
        //      ALGUN OTRO FORMATO PODRIA ALTERAR EL PROCESO PARA ESTE CASO
        var nuevoarchivo = archivo1.slice(0, -4);
        // Se crea el nombre similar al proyecto 1 pero con copy
        var Nombrefinal = nuevoarchivo + "-Copy" + ".txt";
        fs.writeFileSync(Nombrefinal, contenidoarch1);
        var archivofinalC = fs.readFileSync(Nombrefinal, 'utf8');
        console.log("No se ubicó un segundo documento");
        console.log("Se ha creado uno llamado " + Nombrefinal);
        console.log("Este es su contenido:");
        console.log(archivofinalC);
    }
}
