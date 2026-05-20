// Smooth scrolling

document.querySelectorAll('a').forEach(anchor => {

  anchor.addEventListener('click', function(e){

    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    target.scrollIntoView({
      behavior:'smooth'
    });

  });

});


// Navbar background on scroll

window.addEventListener('scroll', () => {

  const navbar = document.querySelector('.navbar');

  if(window.scrollY > 50){
    navbar.style.background = "rgba(0,0,0,.9)";
  } else {
    navbar.style.background = "rgba(0,0,0,.6)";
  }

});