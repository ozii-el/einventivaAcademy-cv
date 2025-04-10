function calcularConsumo() {
let KM = prompt("🚘 ¿Kilometros recorridos de tu carro? 🚘");
let Lts = prompt("📉 ¿Número de litros consumidos? 📉");

let Gas = Lts/KM;

let gasto = Gas.toFixed(2);


alert('💸💸 Tu carro gasta: ' + gasto + ' litros por cada kilometro 💸💸');
};


function cambioUnidades() {
let hora = prompt("⌚Dame la hora a convertir a segundos⌚");
let horaSplit = hora.split(":");

let horas = horaSplit[0];
let minutos = horaSplit[1];

//alert("Formato separado: horas: " + horas + " minutos:" + minutos )

let horasMin = parseInt(horas) * 60; 
let minTotal = parseInt(horasMin) + parseInt(minutos);
let minSeg = parseInt(minTotal) * 60;


alert("🕑 " + hora + " horas, es igual a " + minSeg + " segundos 🕑")

};