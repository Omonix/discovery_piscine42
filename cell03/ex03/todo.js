document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".creator");
  let tabDo;
  if (document.cookie) {
    tabDo = JSON.parse(document.cookie.split("=")[1]);
    for (let x = tabDo.length; x > 0; x--) {
      const newDiv = document.createElement("div");
      newDiv.innerHTML = tabDo[x - 1].name;
      newDiv.className = "child";
      newDiv.id = document.querySelectorAll(".child")[0]
        ? parseInt(document.querySelectorAll(".child")[0].id) + 1
        : 0;
      document
        .querySelector("#ft_list")
        .insertBefore(newDiv, document.querySelectorAll(".child")[0]);
    }
  } else {
    tabDo = [];
  }
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red}, ${green}, ${blue})`;

  document.body.style.setProperty("--random-color-neon", color);
  document.body.style.setProperty(
    "--random-color-neon-less",
    `rgba(${red}, ${green}, ${blue}, 0.2)`
  );

  const ft_task = () => {
    let sign = prompt("New element.");
    const newDiv = document.createElement("div");
    newDiv.innerHTML = sign.toLowerCase();
    newDiv.className = "child";
    newDiv.id = document.querySelectorAll(".child")[0]
      ? parseInt(document.querySelectorAll(".child")[0].id) + 1
      : 0;
    document
      .querySelector("#ft_list")
      .insertBefore(newDiv, document.querySelectorAll(".child")[0]);
    tabDo.unshift({
      name: document.querySelectorAll(".child")[0].innerHTML,
      id: document.querySelectorAll(".child")[0].id,
    });
    ft_canDeleteTask(document.querySelectorAll(".child")[0]);
    ft_createCookie();
  };
  const ft_canDeleteTask = (e) => {
    document.querySelector(".child").addEventListener("click", () => {
      if (confirm("Do you really want delete this task ? " + e.innerHTML)) {
        e.remove();
      }
    });
  };
  const ft_createCookie = () => {
    let cookies = JSON.stringify(tabDo);
    document.cookie = "tab=" + cookies;
  };

  button.addEventListener("click", () => {
    ft_task();
  });
  document.querySelector(".clear").addEventListener("click", () => {
    document.cookie = "tab=[]";
  });
});
