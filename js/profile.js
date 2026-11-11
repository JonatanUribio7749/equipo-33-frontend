(() => {
 "use strict";
 const quotes = ["Nunca es tarde para aprender algo nuevo.","La constancia convierte el esfuerzo en experiencia.","Cada problema es una oportunidad para encontrar una solución.","El progreso empieza cuando damos el primer paso."];
 const challenges = ["Diseñá una solución simple para un problema cotidiano.","Explicá una habilidad que aprendiste practicando.","Pensá cómo mejorarías una tarea repetitiva con tecnología.","Convertí una idea grande en tres pasos pequeños."];
 document.querySelectorAll(".interaction-button").forEach(button => {
   const output = button.closest(".interactive-box").querySelector(".interaction-result");
   let previous = -1;
   button.addEventListener("click", () => {
     const choices = button.dataset.action === "quote" ? quotes : challenges;
     let index;
     do { index = Math.floor(Math.random() * choices.length); } while (choices.length > 1 && index === previous);
     previous = index;
     output.textContent = choices[index];
   });
 });
})();