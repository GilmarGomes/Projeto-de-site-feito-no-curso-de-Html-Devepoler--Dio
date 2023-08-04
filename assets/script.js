const btnElement = document.querySelector("#btn");
const menuElement = document.querySelector("#menu");
btnElement.addEventListener("click", () => {
  if (menuElement.style.display === "none") {
    menuElement.style.display = "block";
  } else {
    menuElement.style.display = "none";
  }
});
