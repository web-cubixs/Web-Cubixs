let hambar = document.querySelector("#hambar");
let closeSidebarIcon = document.querySelector("#closebtn");
let slidebar = document.querySelector(".nav-boxer");
x = false;

function sidebar() {
  // console.log("eye");
  slidebar.classList.toggle("M-sidebar-active");
  closeSidebarIcon.classList.toggle("active");
}
hambar.addEventListener("click", sidebar);

const closeSidebar = () => {
  sidebar();
};

window.addEventListener("resize", (e) => {
  if (window.innerWidth > 600) {
    if (closeSidebarIcon.classList.contains("active")) {
      sidebar();
    }
  }
});
