const prompt = require("prompt-sync") ({ sigint: true})
console.log("=================")
console.log("KALKULATOR PERSGI")
console.log("=================")
let s = Number(prompt ('Sisi : '))
let luas = s * s 
let keliling = 4 * s
console.log (`
luas = ${luas} cm2
keliling = ${keliling} cm`)