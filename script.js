// NAVBAR EFFECT

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 80){

    navbar.style.background = "rgba(0,0,0,0.85)";
    navbar.style.padding = "18px 8%";

  } else {

    navbar.style.background = "rgba(0,0,0,0.45)";
    navbar.style.padding = "25px 8%";

  }

});


// SCROLL ANIMATIONS

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0px)";

    }

  });

},{
  threshold:0.15
});

document.querySelectorAll("section").forEach(section => {

  section.style.opacity = "0";
  section.style.transform = "translateY(60px)";
  section.style.transition = "1s ease";

  observer.observe(section);

});