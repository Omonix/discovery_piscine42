document.addEventListener("DOMContentLoaded", () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red}, ${green}, ${blue})`;

  document.body.style.setProperty("--random-color-neon", color);
  document.body.style.setProperty(
    "--random-color-neon-less",
    `rgba(${red}, ${green}, ${blue}, 0.2)`
  );
});
