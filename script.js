// Hero
window.addEventListener("load", () => {
  document.querySelector(".hero-content").classList.add("show");
});

// Observer untuk semua section
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.3,
  },
);

// Semua elemen yang ingin dianimasikan
document
  .querySelectorAll(".welcome-content, .about-content")
  .forEach((element) => {
    observer.observe(element);
  });

// Counter Statistik
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 100;

        const updateCounter = () => {
          if (count < target) {
            count += speed;

            counter.innerText = Math.ceil(count).toLocaleString();

            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = target.toLocaleString();
          }
        };

        updateCounter();

        counterObserver.unobserve(counter);
      }
    });
  },
  {
    threshold: 0.5,
  },
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

// Animasi Berita
const newsCards = document.querySelectorAll(".news-card");

const newsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

        newsObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  },
);

newsCards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = `all .6s ease ${index * 0.2}s`;

  newsObserver.observe(card);
});

const year = new Date().getFullYear();

document.querySelector(
".footer-bottom p"
).innerHTML =
`© ${year} Desa Cibodas. All Rights Reserved.`;

// Menu Mobile

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});

// Navbar berubah saat scroll

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", function(){

    if(window.innerWidth <= 900){

        this.classList.toggle("active");

    }

});

// Animasi Visi Misi

const vmCards = document.querySelectorAll(".vm-card");

const vmObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

vmCards.forEach(card=>{

    vmObserver.observe(card);

});

// Animasi Letak Geografis

const geografi = document.querySelector(".geografi-text");

const geoObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

geoObserver.observe(geografi);


// Animasi Kepala Desa

const kepalaElements = document.querySelectorAll(".kepala-image, .kepala-info");

const kepalaObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

kepalaElements.forEach(item=>{

    kepalaObserver.observe(item);

});