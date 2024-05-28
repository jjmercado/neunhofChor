let slideIndex = 1;
let autoSlideTimer;
const autoSlideInterval = 5000; // Automatisch nach 5 Sekunden weiterschalten
const pauseDuration = 10000; // Pausiert für 10 Sekunden nach Benutzereingriff

showSlides(slideIndex);
startAutoSlide();

// Next/previous controls
function plusSlides(n) 
{
  showSlides(slideIndex += n);
  pauseAutoSlide();
}

// Thumbnail image controls
function currentSlide(n) 
{
  showSlides(slideIndex = n);
  pauseAutoSlide();
}

function showSlides(n) 
{
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}

function startAutoSlide() 
{
  // Stellen Sie sicher, dass kein alter Timer läuft
  clearInterval(autoSlideTimer);
  autoSlideTimer = setInterval(() => {
    showSlides(slideIndex += 1);
  }, autoSlideInterval);
}

function pauseAutoSlide() 
{
  // Timer für automatisches Weitersliden anhalten
  clearInterval(autoSlideTimer);
  // Nach der Pause den Timer neu starten
  setTimeout(startAutoSlide, pauseDuration);
}