const navSlide = () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links li')

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    links.forEach((link, index) => {
      // console.log(index);
      if(link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 0.8}s`;
      }
      // console.log(index/7);
    });
    hamburger.classList.toggle('toggle');
  });
  window.addEventListener('scroll', function(){
    const navBar = document.querySelector('nav');
    navBar.classList.toggle('sticky', window.scrollY>0);
    // header.classList.toggle('fixSticky', window.scrollY>0);
  });
  
}
window.addEventListener('DOMContentLoaded', navSlide);