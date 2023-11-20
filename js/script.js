// prompt per richiedere numero di km da percorrere
let numero_km = prompt("Inserire il numero di km da percorrere?")
console.log(numero_km)
// prompt per richiedere l'età
let eta = prompt("Inserire l'età")
console.log(eta)
// calcolare il prezzo del viaggio moltiplicando il numero dei km per il prezzo al km 0.21 € 
let biglietto = numero_km * 0.21
console.log(biglietto)

let sconto;
let message;
if (eta < 18){
    message = "Hai diritto ad uno sconto del 20%"
    sconto = biglietto * 20 / 100
    console.log(sconto)
    
}
else{
    biglietto = numero_km * 0.21;
    
}
if (eta > 65){
    message = "Hai diritto ad uno sconto del 40%"
    sconto = biglietto * 40 / 100
    console.log(sconto)
}
else{
    biglietto = numero_km * 0.21;
    
}
// calcolare prezzo finale facendo una sottrazione tra prezzo intero e sconto se necessario
let biglietto_scontato = biglietto - sconto

// limitare le cifre decimali fino a centesimi
let biglietto_finale = biglietto_scontato.toFixed(2)
console.log(biglietto_finale)

// document.getElementById("prezzo").innerHTML = biglietto_finale;