// Active
const activePage = window.location.pathname;
console.log(activePage);

const navLinks = document.querySelectorAll("ul li a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.parentElement.classList.add("bg-white");
  }
});

// Saat masuk ke website ada animasi
document.addEventListener("DOMContentLoaded", function () {
  const hiddenElements = document.querySelectorAll(".hiddenElements");
  hiddenElements.forEach((el) => {
    el.classList.add("show");
  });
});

// Ketika discroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); //terjadi 1x
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements2 = document.querySelectorAll(".hiddenElements2");
hiddenElements2.forEach((el) => observer.observe(el));
