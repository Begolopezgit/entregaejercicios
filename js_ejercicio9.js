//Como el enunciado no indica nada sobre un botón para
// agregar tarea, se indica que con escape se añade
// la tarea a la lista. No puede ser enter por que quizás
// necesite el usuario hacer un salto de línea en la
// descripción de la tarea o introducir mini listas dentro de la propia tarea
// Así opto por la tecla ESC y se lo indico a usuario a modo info

let cajaTextUsu = document.getElementById("TextTareas");
let botLimpia = document.querySelector(".limpiaCompletadas");
let elUlLista = document.querySelector("ul.lista");
let contenedor = document.querySelector(".contenedor9");

const rutaSinCheck = "src/sass/assets/images/ej3-iconos/sin_check.svg";
const rutaConCheck = "src/sass/assets/images/ej3-iconos/con_check.svg";

let listaTareas = [];
let listaTareasSiCheck = [];

//Al iniciar revisamos si hay datos en el navegador
revisaTareas();
//revisamos si hay algún elemento en la lista de checks para cambiarle el icono en DOM
revisaClicados();

//estilos base
contenedor.style.width = "80%";
cajaTextUsu.style.marginTop = "10px";
cajaTextUsu.style.marginBottom = "10px";
cajaTextUsu.style.width = "75%";
botLimpia.style.marginTop = "15px";
botLimpia.style.padding = "10px";

function pintaTareaEnDom(texto) {
  let nwLi = document.createElement("li");

  nwLi.style.whiteSpace = "pre-line"; //tal como lo incluye el usuario, así se añade al dom
  nwLi.style.display = "flex";
  // Si tiene varias líneas alinea arriba; si es una sola línea, lo centra
  nwLi.style.alignItems = "center";
  nwLi.style.gap = "8px"; //situa el check mas o menos arriba
  nwLi.style.marginTop = "15px"; //espacio entre tareas
  nwLi.innerHTML = `
      <a href="#" style="display: flex; align-items: flex-start; margin-top: 3px; flex-shrink: 0;">
          <img class="check" src="src/sass/assets/images/ej3-iconos/sin_check.svg" alt="" />
        </a>
        <span>${texto}</span>`; //dentro de span para aplicar bien estilo

  elUlLista.appendChild(nwLi); //añado nuevo li al ul
}

function revisaTareas() {
  listaTareas = JSON.parse(localStorage.getItem("listaTareas")) || [];
  elUlLista.textContent = "";

  listaTareas.forEach((texto) => {
    pintaTareaEnDom(texto);
  });
}

function revisaClicados() {
  //revisamos si hay algún elemento en la lista de checks para cambiarle el icono en DOM
  if (localStorage.getItem("listaTareasSiCheck")) {
    listaTareasSiCheck =
      JSON.parse(localStorage.getItem("listaTareasSiCheck")) || [];
    listaTareasSiCheck.forEach((ele) => {
      listaTareas.forEach((e, i) => {
        if (ele == e) {
          let liACambiarIcono = document.querySelector(
            `ul.lista > li:nth-child(${i + 1}) > a img`,
          );
          liACambiarIcono.src = rutaConCheck;
        }
      });
    });
  }
}

//evento para añadir elementos a la lista (lista sin check) con la tecla escape
cajaTextUsu.addEventListener("keydown", (e) => {
  if (e.key === "Escape" || e.key === "Ess") {
    e.preventDefault();
    let nwTarea = cajaTextUsu.value.trim(); //quitados saltos línea finales
    listaTareas.push(nwTarea); //añado nueva tarea a array
    //almaceno array listaTareas en local Storage en clave nombrada igual que array
    localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
    pintaTareaEnDom(nwTarea);
    revisaClicados();
    document.querySelector("textarea").value = "";
  }
});
//evento para empezar a escribir tarea con caja limpia
cajaTextUsu.addEventListener("focus", () => {
  document.querySelector("textarea").value = "";
});

// Evento delegado sobre la lista UL para alternar el icono check
elUlLista.addEventListener("click", function (clicaIcono) {
  // Comprueba si el clic fue en la imagen con clase "check" o en su enlace
  const imagen = clicaIcono.target.closest(".check");
  if (!imagen) return;
  clicaIcono.preventDefault();
  const enlace = imagen.closest("a");
  const spanSeleccionado = enlace.nextElementSibling; // Apunta directamente al <span>

  if (imagen.src.includes("sin_check.svg")) {
    imagen.src = rutaConCheck;
    listaTareasSiCheck.push(spanSeleccionado.textContent); //añado a array de si tareas con check
    //almaceno array listaTareasSiCheck en local Storage en clave nombrada igual que array
    localStorage.setItem(
      "listaTareasSiCheck",
      JSON.stringify(listaTareasSiCheck),
    );
  } else {
    imagen.src = rutaSinCheck;
    //busco el índice de la tarea clicada
    const indice = listaTareasSiCheck.indexOf(spanSeleccionado.textContent);
    if (indice !== -1) {
      listaTareasSiCheck.splice(indice, 1); //elimina 1 elemento de la posición (indice)
      //actualizo el local storage
      localStorage.setItem(
        "listaTareasSiCheck",
        JSON.stringify(listaTareasSiCheck),
      );
    }
  }
});

//evento de botón para limpiar las tareas que tienen check
botLimpia.addEventListener("click", function (e) {
  //filtro de la lista tareas quitando los de la lista tareas con check
  listaTareas = listaTareas.filter((tr) => !listaTareasSiCheck.includes(tr));
  //borro el array de la lista con checks
  listaTareasSiCheck = [];
  //actualizo listas en el localStorage
  localStorage.setItem(
    "listaTareasSiCheck",
    JSON.stringify(listaTareasSiCheck),
  );
  localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
  //borro los li del ul del dom
  elUlLista.textContent = "";
  // muestro la lista que tenemos actualizadas en localStorage
  revisaTareas();
});
