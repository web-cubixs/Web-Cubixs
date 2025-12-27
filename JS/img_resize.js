function resizeImageToFitBox() {
  if (window.innerWidth <= 580) {
    const box = document.querySelector(".CubeBox");
    const img = box.querySelector("img");

    const boxRatio = box.clientWidth / box.clientHeight;
    const imgRatio = img.naturalWidth / img.naturalHeight;

    if (imgRatio > boxRatio) {
      // Image is wider than the box
      img.style.width = "100%";
      box.style.height = img.style.height = "auto";
    } else {
      // Image is taller than the box
      img.style.width = "auto";
      img.style.height = "auto";
    }
  }
}

// Also run when the window is resized
window.onresize = resizeImageToFitBox;
window.onload = resizeImageToFitBox;