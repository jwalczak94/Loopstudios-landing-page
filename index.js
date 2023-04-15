const menuMobile = document.querySelector(".menu-button"),
  nav = document.querySelector(".nav-container__links"),
  navLinks = document.querySelectorAll(".nav-container__links a");

const openNav = () => {
  nav.classList.toggle("active");
  menuMobile.classList.toggle("open");
  document.querySelector("main").classList.toggle("hide-all");
  document.querySelector("footer").classList.toggle("hide-all");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.5}s `;
    }
  });
};

menuMobile.addEventListener("click", openNav);
