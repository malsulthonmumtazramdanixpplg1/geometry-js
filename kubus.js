const prompt = require("prompt-sync") ({ sigint: true})
console.log("================")
console.log("KALKULATOR KUBUS")
console.log("================")
let s = Number(prompt("Sisi : "))
let luas = 6 * s * s 
let keliling = 12 * s
console.log (`
    luas = ${luas } cm2
    keliling = ${keliling} cm`)
