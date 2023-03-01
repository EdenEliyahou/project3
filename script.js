// function startGame() {
//     myGamePiece = new component(30, 30, "red", 10, 120);
//     myGamePiece.gravity = 0.05;
//     myScore = new component("30px", "Consolas", "black", 280, 40, "text");
//     myGameArea.start();
//   }
  
//   var myGameArea = {
//     canvas : document.createElement("canvas"),
//     start : function() {
//       this.canvas.width = 480;
//       this.canvas.height = 270;
//       this.context = this.canvas.getContext("2d");
//       document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//       this.frameNo = 0;
//     },
//     clear : function() {
//       this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     }
//   }

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class=’fas fa-bars’></i>";
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class=’fas fa-times’></i>";
    }
}
 
/* Event Listener */
// toggle.addEventListener("click", toggleMenu, false);

// function toggleMobileMenu(Menu) {
//     Menu.classList.toggle('open');
// }
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}


// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting){
//             entry.target.classList.toggle('show', entry.isIntersecting);

//         } else{
//             entry.target.classList.remove('show');
//         }
//     });
// });
// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((ell) => observer.observe(el));
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
 
  