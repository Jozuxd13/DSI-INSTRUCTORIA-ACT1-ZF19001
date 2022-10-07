"use strict";
exports.__esModule = true;
var fs = require("fs");
var inputFileName = process.argv[2];
var outputFileName = process.argv[3];
var content = fs.readFileSync(inputFileName);
var contentout = fs.readFileSync(outputFileName);
if (fs.existsSync(outputFileName)) {
    if (contentout.toString() == "") {
        fs.writeFileSync(outputFileName, content);
        var contentoutf = fs.readFileSync(outputFileName);
        console.info(outputFileName.toString());
        console.log("Contenido del nuevo documento:");
        console.info(contentoutf.toString());
    }
    else {
        fs.writeFileSync(outputFileName, contentout + "" + content);
        var contentoutf = fs.readFileSync(outputFileName);
        console.info(outputFileName.toString());
        console.log("Contenido del nuevo documento:");
        console.info(contentoutf.toString());
    }
}
