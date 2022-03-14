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



  // Skills
    
    
  let skills = document.querySelector(".skills"),
  collapse = document.getElementsByClassName("collapse");
  
  
  for (i = 0; i < collapse.length; i++) {
    
    // Activa y desactiva el toggle
    collapse[i].addEventListener("click", function(e) {
      this.classList.toggle("active");
        const bgColor = window.getComputedStyle(this.parentNode).backgroundColor;
        var content = this.nextElementSibling; //selecciona el siguiente div
        if (content.style.maxHeight){
          content.style.maxHeight = null; //cerramos el contenido
          skills.style.backgroundColor = "#fff";
        } else {
          content.style.maxHeight = content.scrollHeight + 32 + "px"; //mostramos el contenido
          skills.style.backgroundColor = bgColor; //cambiamos el color del fondo
        }
        
        
      });
      
      
    }
    
    // //animacion de los titulos
    // let skillsTitle = Array.from(document.querySelectorAll(".skill__title"));
  
    // let waypoint = new Waypoint({
    //   element: document.querySelector(".skills"),
    //   handler: function(){
    //     anime({
    //       targets: skillsTitle,
    //       easing: 'easeOutExpo',
    //       translateX: [-100, 0],
    //       opacity: [0, 1],
          
    //       }
    //     )
    //   },
    // }
    //   );
    
    
    // skillsTitle.forEach((title, pos) => {
    //   //skillsTitle.style.pointerEvents = 'none';
    //   charming(title);
      
    //   anime({
    //     targets: document.querySelectorAll('.skill__title span'),
    //     duration: 800,
    //     delay: (t,i) => anime.random(0,600)+500,
    //     easing: 'easeInOutQuad',
    //     opacity: [0,1],
    //     complete: () => {
    //       //title.style.pointerEvents = 'auto';
    //       title.classList.add('menu__item--showDeco');
    //     }
    //   });
    // });
  
    
  });