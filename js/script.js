// bonus
let nome = prompt("Inserire nome")
let cognome = prompt("Inserire cognome")
// prompt per richiedere l'età
let eta = prompt("Inserire l'età")
console.log(eta)
// prompt per richiedere numero di km da percorrere
let numero_km = prompt("Inserire il numero di km da percorrere?")
console.log(numero_km)
// calcolare il prezzo del viaggio moltiplicando il numero dei km per il prezzo al km 0.21 € 
let biglietto = numero_km * 0.21


let sconto;
let message;
if (eta < 18){
    message = "Hai diritto ad uno sconto del 20%. Prezzo: "
    sconto = biglietto * 20 / 100
    console.log(sconto)
     // calcolare prezzo finale facendo una sottrazione tra prezzo intero e sconto se necessario
     let biglietto_scontato = biglietto - sconto
     // limitare le cifre decimali fino a centesimi
     let biglietto_finale = biglietto_scontato.toFixed(2)
     console.log(biglietto_finale)
     document.getElementById("biglietto").innerHTML = message + biglietto_finale + "€";
 
    
}
else if (eta > 65){
    message = "Hai diritto ad uno sconto del 40%. Prezzo: "
    sconto = biglietto * 40 / 100
    console.log(sconto)
    // calcolare prezzo finale facendo una sottrazione tra prezzo intero e sconto se necessario
    let biglietto_scontato = biglietto - sconto
    // limitare le cifre decimali fino a centesimi
    let biglietto_finale = biglietto_scontato.toFixed(2)
    console.log(biglietto_finale)
    document.getElementById("biglietto").innerHTML = message + biglietto_finale + "€";
}
else{
    biglietto = numero_km * 0.21;
    // limitare le cifre decimali fino a centesimi
    let biglietto_finale = biglietto.toFixed(2)
    console.log(biglietto_finale)
    document.getElementById("biglietto").innerHTML = biglietto_finale + "€";
    
}


document.getElementById("nome").innerHTML = nome;
document.getElementById("cognome").innerHTML = cognome;
document.getElementById("eta").innerHTML = eta + " anni";
document.getElementById("chilometri").innerHTML = numero_km + "km";
