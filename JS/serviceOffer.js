const links = document.querySelectorAll(".srvc-offer-box1 ul li a");
const contentArea = document.getElementById("content-area");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const file = this.getAttribute("data-file");
    let toRemove = document.querySelector(".active");
    toRemove.classList.remove("active");

    fetch(`services/${file}`)
      .then((response) => {
        if (!response.ok) throw new Error("Content not found");
        return response.text();
      })
      .then((html) => {
        link.classList.add("active");
        contentArea.innerHTML = html;
      })
      .catch((err) => {
        contentArea.innerHTML =
          "<p>Sorry, the content could not be loaded.</p>";
        console.error(err);
      });
  });
});
