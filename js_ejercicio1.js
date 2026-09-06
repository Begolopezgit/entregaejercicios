let bot = document.querySelector("button");
bot.style.width = "20%";
bot.style.minWidth = "150px";
bot.addEventListener("click", function (e) {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  let fondo = document.querySelector("body");
  fondo.style.backgroundColor = `rgb(${red},${green},${blue})`;
});
