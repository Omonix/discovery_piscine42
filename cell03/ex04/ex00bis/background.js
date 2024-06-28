const changeColor = () => {
  let color = Math.floor(Math.random() * 16581375).toString(16);
  $("body").css("background-color", "#" + color);
};
