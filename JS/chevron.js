const chevron = document.getElementById("chevron");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    chevron.classList.add("hide");
  } else {
    chevron.classList.remove("hide");
  }
});