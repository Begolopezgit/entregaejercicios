/* creo 4 funciones: 
1-Para obtener una letra en mayúsculas
2-Para obtener una letra en minúsculas
3-Para obtener un número (0-9);
4-Para obtener un símbolo.

Las meto en un array para que se puedan ejecutar aleatoriamente 
cuando la longitud de la contraseña sea superior a 4
Junto todos los resultados en una única variable para 
verificar que tiene la longitud solicitada y los descoloco
aleatoriamente.
*/
let longitudPass = document.getElementById("long_pass");
let cantidad = 0;
let botGenera = document.querySelector(".botPass");
let muestraPass = document.querySelector(".pass");

let letrasMin = "abcdefghijklmnñopqrstuvwxyz".split("");
let letrasMay = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");
let numeros = "0123456789".split("");
let simbolos = "!@#$%&*-_+=.?".split("");
let contraseniaAleatoria = [];

botGenera.style.marginTop = "15px";
botGenera.style.width = "20%";
botGenera.style.minWidth = "150px";
botGenera.addEventListener("click", (e) => {
  e.preventDefault();
  if (longitudPass.value >= 4 && longitudPass.value != "") {
    obtenerMinuscula();
    obtenerMayuscula();
    obtenerNumero();
    obtenerSimbolo();
    //diferencio el html (longitudPass) de su valor(antidad)
    cantidad = document.getElementById("long_pass").value;
    console.log(longitudPass);
    console.log(contraseniaAleatoria.length);
    while (contraseniaAleatoria.length < cantidad) {
      obtenerMas();
    }
    console.log(contraseniaAleatoria);
    let desordenContrasenia = contraseniaAleatoria.sort(
      () => Math.random() - 0.5,
    );

    let passFinal = desordenContrasenia.join("");

    muestraPass.textContent = `Tu contraseña es: ${passFinal} (¡Copiada, lista para pegar!)`;
    navigator.clipboard.writeText(passFinal);
    document.getElementById("long_pass").value = "";
    contraseniaAleatoria = [];
  } else {
    alert("tiene que ser mayor a 4");
    document.getElementById("long_pass").value = "";
  }
});

function obtenerMinuscula() {
  let indice = Math.floor(Math.random() * letrasMin.length);
  let lmi = letrasMin[indice];
  contraseniaAleatoria.push(lmi);
  //console.log(lmi, ",", indice);
}

function obtenerMayuscula() {
  let indice = Math.floor(Math.random() * letrasMay.length);
  let lma = letrasMay[indice];
  contraseniaAleatoria.push(lma);
  //console.log(lma, ",", indice);
}

function obtenerNumero() {
  let indice = Math.floor(Math.random() * numeros.length);
  let nu = numeros[indice];
  contraseniaAleatoria.push(nu);
  //console.log(nu, ",", indice);
}
function obtenerSimbolo() {
  let indice = Math.floor(Math.random() * simbolos.length);
  let sim = simbolos[indice];
  contraseniaAleatoria.push(sim);
  //console.log(sim, ",", indice);
}

function obtenerMas() {
  let arrayFunciones = [
    obtenerMinuscula,
    obtenerMayuscula,
    obtenerNumero,
    obtenerSimbolo,
  ];
  let indice = Math.floor(Math.random() * arrayFunciones.length);
  arrayFunciones[indice]();
}
