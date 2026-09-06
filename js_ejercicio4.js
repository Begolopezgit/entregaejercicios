const mascotaEnTienda = [
  { mascota: "Perro" },
  { mascota: "Gato" },
  { mascota: "Pez" },
  { mascota: "Loro" },
  { mascota: "Periquito" },
  { mascota: "Grillo" },
  { mascota: "Tortuga" },
  { mascota: "Canario" },
  { mascota: "Grillo" },
  { mascota: "Hámster" },
  { mascota: "Conejo" },
  { mascota: "Erizo" },
  { mascota: "Poni" },
];
let lista = [];
//let losLi = document.querySelectorAll(".list li");
let elUlList = document.querySelector("ul.list");
let busqueda = document.getElementById("busca");
busqueda.style.marginBottom = "10px";

//cargo la lista con los elementos del JSON
mascotaEnTienda.forEach((eleme, i) => {
  lista.push(eleme.mascota);
});

//pinto cualquier lista en el dom
function pintarLista(array) {
  array.forEach((elem, i) => {
    let newLi = document.createElement("li");
    elUlList.appendChild(newLi);
    newLi.innerHTML = elem;
  });
}
pintarLista(lista);

//creo una lista "iguales" con coincidencias de lo introducido y
//lo que tenemos en la lista del dom o/y BBDD

busqueda.addEventListener("input", (e) => {
  let iguales = lista.filter((mascot) =>
    mascot.toLowerCase().includes(e.target.value.toLowerCase()),
  );
  //borro toda la lista
  elUlList.textContent = "";
  //muestro la nueva lista de iguales según se cumpla coincidencia
  pintarLista(iguales);
});
