const frutas = ["laranja", "limão", "uva"];
//exercicio 1
const listaFrutas = document.getElementById("lista-de-frutas")
const fruta1 = document.getElementById("fruta-1")
const fruta2 = document.getElementById("fruta-2")
const fruta3 = document.getElementById("fruta-3")
const fruta4 = document.getElementById("fruta-4")

// for (let i = 0; i < frutas.length; i++) {
//   document.getElementById(`fruta-${[i + 1]}`).innerHTML = frutas[i]
// }

//
fruta1.innerHTML = frutas[0];
fruta2.innerHTML = frutas[1];
fruta3.innerHTML = frutas[2];

const adicionarFruta = document.getElementById('fruta');
let novaFruta = () => {
    fruta4.innerHTML = adicionarFruta.value
}

function input() {
    console.log(fruta.value)
}