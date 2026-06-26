// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal-on-scroll using IntersectionObserver
const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach((el) => observer.observe(el));
} else {
  // Fallback: show everything
  reveals.forEach((el) => el.classList.add("is-visible"));
}
