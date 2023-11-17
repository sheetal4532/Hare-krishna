const section = document.querySelector(".book-showcase");
const book = document.querySelector(".book");
const body = document.querySelector("body");

let prev = 0;
let cal = 0;
const  sensitivity = 2;

section.addEventListener("mousedown", function (e){
    const x = e.clientX;

    section.addEventListener("mousedown", rotate);
      function rotate(e){
        cal = (e.clientX - x) / sensitivity;

        book.style.transform = `rotateY(${cal + prev}deg)`;

        body.style.cursor =  "grabbing";
      }

      prev += cal;

      window.addEventListener("mouseup", function(){

        section.removeEventListener("mousemove", rotate);

        body.style.cursor =  "default" ;
      });
});