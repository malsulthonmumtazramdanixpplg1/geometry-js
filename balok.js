const prompt = require("prompt-sync") ({ sigint: true})
console.log("================")
console.log("KALKULATOR BALOK")
console.log("================")
let p = Number(prompt("Panjang : "))
let l = Number(prompt("Lebar : "))
let t = Number(prompt("Tinggi : "))
let luas = p * l * t   
let keliling = 2 *(p*l + p*t + l*t)
console.log (`
    luas = ${luas } cm2
    keliling = ${keliling} cm`)