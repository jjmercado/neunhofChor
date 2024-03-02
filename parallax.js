window.addEventListener('scroll', () => 
{
    const parallax = document.getElementById('parallax');
    let scrollPosition = window.scrollY;
  
    // Der Parallax-Effekt kann durch Ändern des Faktors 0.5 angepasst werden
    parallax.style.backgroundPositionY = scrollPosition * 0.4 + 'px';
});
  