const prompt = require("prompt-sync") ({ sigint: true})
console.log("===================")
console.log("KALKULATOR KECEPATAN")
console.log("===================")
let s  = Number(prompt("Jarak tempuh : "))
let t = Number(prompt("Waktu tempuh : "))
let kecepatan = s/t
console.log (`
    kecepatan = ${kecepatan} km/jam`) 
