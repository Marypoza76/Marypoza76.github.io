document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navbar = document.getElementById("navbar");

  // Toggle del menú en móvil
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Efecto scroll para navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Cierra el menú al hacer clic en un link
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
});

  // Alterna visibilidad entre secciones al hacer clic en el menú
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".content-section");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));

      // Oculta todas las secciones
      sections.forEach(section => section.classList.remove("active"));

      // Muestra solo la sección destino
      if (target) {
        target.classList.add("active");
      }

      // Actualiza estado visual del menú
      navLinks.forEach(nav => nav.classList.remove("active"));
      link.classList.add("active");
    });
  });
