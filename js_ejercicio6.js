let losBotones = document.querySelector(".botones");
let timer = document.querySelector(".tiempo");
let container = document.querySelector(".contenedor");
let iniciar = document.getElementById("inicio");
let pausar = document.getElementById("pausa");
let reiniciar = document.getElementById("reinicio");

let idSetInerval = 0;

let horas = 0;
let minutos = 0;
let segundos = 0;
//estilos base
losBotones.style.display = "flex";

losBotones.style.gap = "12px";
timer.style.fontSize = "30px";
timer.style.marginLeft = "15%";
losBotones.style.marginTop = "15px";
losBotones.style.marginLeft = "6%";

container.style.marginLeft = "50px";

//timer.textContent = `${horas}:${minutos}:${segundos}`;
timer.textContent = "00:00:00";

iniciar.addEventListener("click", () => {
  iniciar.disabled = true;
  idSetInerval = setInterval(function () {
    if (segundos <= 58) {
      segundos++;
    } else {
      segundos = 0;
      minutos++;
      if (minutos == 60) {
        minutos = 0;
        horas++;
      }
    }
    timer.textContent = `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
  }, 1000);
});

pausar.addEventListener("click", () => {
  clearInterval(idSetInerval);
  iniciar.disabled = false;
});

reiniciar.addEventListener("click", () => {
  clearInterval(idSetInerval);
  horas = 0;
  minutos = 0;
  segundos = 0;
  timer.textContent = "00:00:00";
  iniciar.disabled = false;
});
