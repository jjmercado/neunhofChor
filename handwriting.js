const words = ["Harmonie", "Gemeinschaft", "Leidenschaft", "Magie"]
const speed = 100; // Geschwindigkeit, mit der die Wörter geschrieben werden (in Millisekunden)
let i = 0;

function typeWriter() 
{
    let span = document.getElementById("word-1");
    let word = words[0];
    
    if(span.innerHTML.length != words[0].length)
    {
      span.innerHTML += word[i];
      i++;
      setTimeout(typeWriter, speed);
    }  
}

window.onload = typeWriter; 
