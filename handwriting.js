const text1 = "Liebst du es, mit anderen zu singen und magische Harmonien zu erleben?";
const text2 = "Möchtest du neue Freundschaften knüpfen und deine Stimme verbessern?";
const text3 = "Fühlst du die Begeisterung am Singen und möchtest diese Freude teilen?";
const character = text1.split(" ");
const speed = 100; // Geschwindigkeit, mit der die Wörter geschrieben werden (in Millisekunden)

let i = 0;
function typeWriter() {
  if (i < character.length) {
    document.getElementById("text").innerHTML += character[i] + " ";
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
