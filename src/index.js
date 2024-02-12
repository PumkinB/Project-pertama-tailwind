let menuItems = document.getElementById("menu").children;

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", () => {
    // hilangkan class ketika diklik
    for (let j = 0; j < menuItems.length; j++) {
      menuItems[j].classList.remove("bg-white");
    }

    // tambahkan class ketika di klik
    menuItems[i].classList.add("bg-white");
  });
}

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
