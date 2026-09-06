//Inicialmente pensé hacerlo con el evento key pero se tenía
//que revisar si se borran caracteres y si se pulsaban otro tipo de carácter
//Registrando lo que se teclea en array y trabajar con el último elemento
//me pareció más límpio
let cajaTexto = document.getElementById("textoAContar");
let cajaPalabras = document.querySelector(".numPalabras");
let cajaCaracteres = document.querySelector(".numCaracteres");

let caracteres = 0;
let palabras = 0;
let arrayPalabras = [];
let ultimoIndiceArray = 0;
let ultimoElementoArray = 0;

cajaTexto.addEventListener("input", (e) => {
  arrayPalabras.push(e.target.value);
  ultimoIndiceArray = arrayPalabras.at(-1);
  //el último elemento lo paso a un array por(split) cada palabra y las cuento,
  // hay que quitar espacio y enters (trim y /\s+/)
  let nuevoArray = ultimoIndiceArray.trim().split(/\s+/);
  palabras = nuevoArray.length;
  cajaPalabras.textContent = palabras;
  // ahora uno (join) todos los elemementos del array y cuento así tengo los caracteres
  caracteres = nuevoArray.join("").length;
  cajaCaracteres.textContent = caracteres;
});
