const prompt = require("prompt-sync") ({ sigint: true})
console.log("================")
console.log("KALKULATOR USAHA")
console.log("================")
//let w = Number(prompt("Usaha : "))
let f = Number(prompt("Gaya : "))
let s = Number(prompt("Perpindahan Benda : "))
let usaha = f * s
console.log (`
    usaha = ${usaha}`)