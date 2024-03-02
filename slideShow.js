let slideIndex = 0;
let id;
let slides = document.getElementsByClassName("mySlides");
showSlides();

function showSlides() 
{
  let i;
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) 
  {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slideIndex++;

  if (slideIndex > slides.length) 
  {
    slideIndex = 1;
  }
  else if (slideIndex < 1)
  {
    slideIndex = slides.length;
  }

  slides[slideIndex -1].style.display = "flex";
  dots[slideIndex -1].className += " active";
  id = setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// Next/previous controls
function plusSlides(n) 
{
    n -= 1;
    clearTimeout(id);
    showSlides(slideIndex += n);
}