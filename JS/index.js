const sections = document.querySelectorAll("section");
const NavLinks = document.querySelectorAll(".nav-link");
window.onscroll = () => {
  sections.forEach((sec) => {
    const bodyTop = scrollY;
    const secTop = sec.offsetTop - 150;
    const secHeight = sec.offsetHeight;
    const id = sec.getAttribute("id");
    if (bodyTop >= secTop && bodyTop < secTop + secHeight) {
      sec.classList.remove("active");
      NavLinks.forEach((link) => link.classList.remove("active"));
      document
        .querySelector(".nav-link[href*=" + id + "]")
        .classList.add("active");
    }
  });
};
