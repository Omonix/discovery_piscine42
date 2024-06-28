document.addEventListener("DOMContentLoaded", (event) => {
  let button = document.querySelector(".buttonColor");
  button.addEventListener("click", () => {
    let randomColor = Math.floor(Math.random() * 16581375).toString(16);
    let color = "#" + randomColor;
    document.body.style.backgroundColor = color;
    button.style.borderColor = color;
    button.value = color;
  });
});
