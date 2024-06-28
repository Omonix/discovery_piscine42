document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".buttonCounter");
  let count = 0;
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.setProperty("--color", color);

  button.addEventListener("click", () => {
    if (count === 0) {
      setTimeout(() => {
        alert(`You do ${count} click in 5 seconds.\nSo, ${count / 5} CPS`);
        count = 0;
      }, 5000);
    }
    count++;
    document.querySelector(".count").innerHTML = count;
  });
});
