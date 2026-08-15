const prompt = require("prompt-sync") ({ sigint: true})
console.log("=================")
console.log("KALKULATOR prisma")
console.log("=================")
let la = Number(prompt("Panjang : "))
let ka = Number(prompt("Lebar : "))
let tp = Number(prompt("Tinggi : "))
let n = Number(prompt("Rusuk : "))
let luas = (2 * la) + (ka * tp) 
let keliling = (2 * ka) + (n*tp)
console.log (`
    luas = ${luas } cm2
    keliling = ${keliling} cm`)