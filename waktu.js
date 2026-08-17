const prompt = require("prompt-sync") ({ sigint: true})
console.log ("================")
console.log ("KALKULATOR WAKTU")
console.log ("================")
//let t = Number(prompt ("Waktu : "))
let s = Number(prompt("Jarak : "))
let v = Number(prompt("Kecepatan : "))
let waktu = s/v
console.log(`
    waktu = ${waktu} jam`)