(() => {
  "use strict";
  const card = document.querySelector(".number-card");
  if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const art = document.querySelector(".hero-art");
  art.addEventListener("pointermove", event => {
    const rect = art.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    card.style.transform = `rotate(7deg) translate(${x * 12}px, ${y * 12}px)`;
  });
  art.addEventListener("pointerleave", () => card.style.transform = "rotate(7deg)");
})();