let cajasNumeros = document.querySelector(".numeros");
let nume_1 = document.getElementById("num_1");
let nume_2 = document.getElementById("num_2");
let sumar = document.getElementById("suma");
let restar = document.getElementById("resta");
let multiplicar = document.getElementById("multiplica");
let dividir = document.getElementById("divide");
let resul = document.getElementById("resultado");

//revisa(Number(nume_1.value), Number(nume_2.value));

sumar.addEventListener("click", () => {
  if (!revisa(nume_1.value, nume_2.value)) return;
  resul.textContent = Number(nume_1.value) + Number(nume_2.value);
  bordes(sumar);
});

restar.addEventListener("click", () => {
  if (!revisa(nume_1.value, nume_2.value)) return;
  resul.textContent = Number(nume_1.value) - Number(nume_2.value);
  bordes(restar);
});

multiplicar.addEventListener("click", () => {
  if (!revisa(nume_1.value, nume_2.value)) return;
  resul.textContent = Number(nume_1.value) * Number(nume_2.value);
  bordes(multiplicar);
});

dividir.addEventListener("click", () => {
  if (nume_2.value == 0) {
    resul.textContent = "";
    nume_1.value = "";
    nume_2.value = "";
    alert("No se puede dividir entre cero");
    return;
  } else {
    if (!revisa(nume_1.value, nume_2.value)) return;
    resul.textContent = Number(nume_1.value) / Number(nume_2.value);
  }
  bordes(dividir);
});

function revisa(num_1, num_2) {
  if (isNaN(num_1) || isNaN(num_2)) {
    resul.textContent = "";
    nume_1.value = "";
    nume_2.value = "";
    alert("Necesitas números");

    return false;
  } else {
    return true;
  }
}
//cambio color de borde para saber la operación utilizada
function bordes(boton) {
  sumar.style.borderColor = "grey";
  restar.style.borderColor = "grey";
  multiplicar.style.borderColor = "grey";
  dividir.style.borderColor = "grey";
  if (boton != "vacio") {
    boton.style.borderColor = "red";
  }
}
//quito cualquier borde de operaciones y el resultado
cajasNumeros.addEventListener("focusin", () => {
  bordes("vacio");
  resul.textContent = "";
});
