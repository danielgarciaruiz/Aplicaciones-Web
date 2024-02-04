//npm install prompt-sync

const sc = require("prompt-sync")({sigint: true});
const edad = sc("¿Cuál es tu edad? ")
console.log("Tienes " + edad)
if (edad>=18){
    console.log("Puedes conducir")
}else{
    console.log ("No puedes conducir")
}
