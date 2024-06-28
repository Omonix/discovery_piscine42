$(document).ready(() => {
  let button = $(".creator");
  let tabDo;
  if (document.cookie) {
    tabDo = JSON.parse(document.cookie.split("=")[1]);
    for (let x = 0; x < tabDo.length; x++) {
      $("#ft_list").before(
        `<div class="child effectSlide" id=${x}>${tabDo[x].name}</div>`
      );
    }
  } else {
    tabDo = [];
  }

  const ft_task = () => {
    let sign = prompt("New element.");
    let idNumber = tabDo.length;
    $("#ft_list").after(`<div class="child" id=${idNumber}>${sign}</div>`);
    tabDo.unshift({
      name: sign,
      id: $(".child").attr("id"),
    });
    ft_canDeleteTask($(".child").attr("id"));
    ft_createCookie();
  };
  const ft_canDeleteTask = (id) => {
    $(`#${id}`).click(() => {
      if (
        confirm("Do you really want delete this task ? " + $(`#${id}`).text())
      ) {
        $(`#${id}`).remove();
      }
    });
  };
  const ft_createCookie = () => {
    let cookies = JSON.stringify(tabDo);
    document.cookie = "tab=" + cookies;
  };

  button.click(() => {
    ft_task();
  });
  $(".clear").click(() => {
    document.cookie = "tab=[]";
  });
});
