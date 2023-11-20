// prompt per richiedere numero di km da percorrere
let numero_km = prompt("Inserire il numero di km da percorrere?")
console.log(numero_km)

let eta = prompt("Inserire l'età")
console.log(eta)

let prezzo = numero_km * 0.21
console.log(prezzo)
let sconto;

if (eta < 18){
    sconto = numero_km * 0.21 * 20 / 100
    console.log(sconto)
}
else{
    prezzo = numero_km * 0.21;
    
}
if (eta > 65){
    sconto = numero_km * 0.21 * 40 / 100
    console.log(sconto)
}
else{
    prezzo = numero_km * 0.21;
    
}

let prezzo_finale = prezzo - sconto

let n = prezzo_finale.toFixed(2)
console.log(n)