const prompt = require("prompt-sync") ({ sigint: true})
console.log("====================")
console.log("KALKULATOR TRAPESIUM")
console.log("=====================")
let s1 = Number(prompt ("Sisi sejajar 1 : "))
let s2 = Number(prompt("Sisi sejajajar 2 : "))
let s3 = Number(prompt("Sisi sejajajar 3 : "))
let s4 = Number(prompt("Sisi sejajajar 4 : "))
let t = Number(prompt("Tinggi : "))
let luas = s1 + s2 * t / 2
let keliling = s1  + s2 + s3 + s4
console.log (`
    luas = ${luas} cm2
    keliling = ${keliling} cm`)