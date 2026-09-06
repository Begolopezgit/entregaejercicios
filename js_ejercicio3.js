let text_usu = document.querySelector("textarea");
let botAnade = document.querySelector("button");

let list = document.querySelector("li");
let listado = [];
let todoslosLi = document.querySelectorAll(".lista li");
todoslosLi.forEach((element) => {
  listado.push(element.textContent.trim());
});

text_usu.style.width = "40%";
text_usu.style.minWidth = "350px";
text_usu.style.marginBottom = "5px";
botAnade.style.marginBottom = "15px";

//añado los elementos al dom con icono/imagen
todoslosLi.forEach((element, i) => {
  //doy estilos al enlace a para situar icono y texto alineado
  element.innerHTML = `
    <a href="#"style="display: flex; align-items: flex-start; margin-top: 3px; flex-shrink: 0;">
      <img class="elemento" src="ej3-iconos/sin_check.svg" alt="" />
    </a>
    ${listado[i]}
  `;
});

//Estilos
function aplicarEstilos(objetivo) {
  // Si lo que recibo es una lista (NodeList), la recorro
  if (objetivo instanceof NodeList || Array.isArray(objetivo)) {
    objetivo.forEach((el) => aplicarEstilos(el)); // Se llama a sí misma para cada uno
  } else {
    // Si es un solo elemento, le pongo los estilos
    objetivo.style.listStyleType = "none";
    objetivo.style.display = "flex";
    objetivo.style.alignItems = "center";
    objetivo.style.gap = "5px";
  }
}

botAnade.addEventListener("click", function (e) {
  console.log(text_usu.value);
  e.preventDefault();
  let newTarea = text_usu.value;
  listado.push(newTarea); //añado nueva tarea a listado
  elUlLista = document.querySelector("ul.lista");
  let newLi = document.createElement("li"); //creo nuevo li
  aplicarEstilos(newLi);
  elUlLista.appendChild(newLi); //añado nuevo li al ul
  todoslosLi = document.querySelectorAll(".lista li");
  todoslosLi.forEach((element, i) => {
    console.log(element);
    element.innerHTML = `
    <a href="#"style="display: flex; align-items: flex-start; margin-top: 3px; flex-shrink: 0;">
      <img class="elemento" src="src/sass/assets/images/ej3-iconos/sin_check.svg" alt="" />
    </a>
    ${listado[i]}`;
    document.querySelector("textarea").value = "";
  });
});

//borrado de un elemento con el evento click
//pongo la escucha al ul (al padre que escucha todo lo que les pasa a sus hijos)
//  para que con .target sabemos justo el elemento clicado
let elUl = document.querySelector(".lista");
elUl.addEventListener("click", function (clicaIcono) {
  if (clicaIcono.target.classList.contains("elemento")) {
    //verifico lo clicado
    clicaIcono.preventDefault();
    const paraborrar = clicaIcono.target.closest("li"); //es el li del a clicado;

    paraborrar.remove(); //y es el elemento que elimino de la lista del dom
    //para quitarlo del listado, del array en memoria
    //busco su nombre
    const nombre = paraborrar.textContent.trim();
    const indice = listado.indexOf(nombre);
    if (indice > -1) {
      listado.splice(indice, 1);
    }
  }
});
//evento para empezar a escribir tarea con caja limpia
text_usu.addEventListener("focus", () => {
  document.querySelector("textarea").value = "";
});
