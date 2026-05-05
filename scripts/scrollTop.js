// Get the button:
let getToTopButton = document.getElementById("getToTopButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => scrollFunction();

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
  {
    getToTopButton.style.display = "block";
  } 
  else 
  {
    getToTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  document.scrollingElement.scrollTop = 0;
}

// Copy text to clipboard
function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = element.innerHTML;
        element.innerHTML = "<em>Kopiert! ✓</em>";
        element.style.color = "green";
        setTimeout(() => {
            element.innerHTML = originalText;
            element.style.color = "";
        }, 1500);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}