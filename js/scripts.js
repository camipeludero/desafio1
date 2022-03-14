document.addEventListener('DOMContentLoaded', () => {

  const hamburguer = document.querySelector(".hamburguer");
  const menu = document.querySelector(".links");
  const navLink = document.querySelectorAll(".navlink");

  hamburguer.addEventListener("click", mobileMenu);

  function mobileMenu() {
    hamburguer.classList.toggle("active");
    menu.classList.toggle("active");
  }

  navLink.forEach(n => n.addEventListener("click", closeMenu));

  function closeMenu() {
    hamburguer.classList.remove("active");
    menu.classList.remove("active");
  }

  // Skill

  let skills = document.querySelector(".skills"),
    collapse = document.getElementsByClassName("collapse");

  for (i = 0; i < collapse.length; i++) {

    // Activa y desactiva el toggle
    collapse[i].addEventListener("click", function (e) {
      this.classList.toggle("active");
      const bgColor = window.getComputedStyle(this.parentNode).backgroundColor;
      var content = this.nextElementSibling; //selecciona el siguiente div
      if (content.style.maxHeight) {
        content.style.maxHeight = null; //cerramos el contenido
        skills.style.backgroundColor = "#fff";
      } else {
        content.style.maxHeight = content.scrollHeight + 32 + "px"; //mostramos el contenido
        skills.style.backgroundColor = bgColor; //cambiamos el color del fondo
      }

    });

  }

});