let bot = document.querySelector("button");
let texto = document.getElementById("numC");
let num_clic = 0;
bot.style.width = "20%";
bot.style.minWidth = "150px";
bot.addEventListener("click", function (e) {
  num_clic += 1;
  texto.textContent = `Clic: ${num_clic}`;
});
