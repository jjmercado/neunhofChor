document.getElementById("chor-button1").classList.add("active");
document.getElementById("chor-button3").classList.add("active");

const buttonContentMap = {
    "chor-button1": {
        imgSrc: "./img/chor.jpg",
        imgAlt: "Chor Bilder",
        text: "Unser Gesangsverein 1848, Neunhofs ältester Verein, trägt die stolze Last einer reichen Chorgeschichte, die bis ins Jahr 1848 zurückreicht. " +
              "Unsere Freude am Singen ist seitdem unvermindert und hat sich durch die Jahrzehnte hindurch fortgesetzt.<br><br>" +
              "Im Laufe der Zeit hat sich unser Repertoire stetig weiterentwickelt, und wir haben uns musikalisch keine Grenzen gesetzt. " +
              "Genres und Epochen durchqueren wir mit Freude und Hingabe. Unser meist dreistimmiger Chor, bestehend aus Sopran, Alt und einer dritten Stimme, " +
              "besteht aus ungefähr 21 enthusiastischen Mitgliedern."
    },
    "chor-button2": {
        imgSrc: "./img/chor2.jpg",
        imgAlt: "Chor Bilder",
        text: "mindert und hat sich durch die Jahrzehnte hindurch fortgesetzt.<br><br>" +
              "Im Laufe der Zeit hat sich unser Repertoire stetig weiterentwickelt, und wir haben uns musikalisch keine Grenzen gesetzt. " +
              "Genres und Epochen durchqueren wir mit Freude und Hingabe. Unser meist dreistimmiger Chor, bestehend aus Sopran, Alt und einer dritten Stimme, " +
              "besteht aus ungefähr 21 enthusiastischen Mitgliedern.<br>"
    },
    "chor-button3": {
        imgSrc: "./img/chor3.jpg",
        imgAlt: "Chor Bilder",
        text: "Wenn Du Lust und Freude am Singen verspürst, laden wir Dich herzlich ein, bei uns vorbeizuschauen! Neue Sängerinnen und Sänger sind bei uns immer willkommen und werden mit offenen Armen empfangen.<br><br>" +
              "Für alle Fragen und weitere Informationen stehe ich, Ramona Baum, als 1. Vorsitzende gerne zur Verfügung. Schließen Sie sich unserer lebendigen Gemeinschaft an und entdecken Sie die Magie des gemeinsamen Gesangs!<br><br>" +
              "Chorprobe findet einmal pro Woche, dienstags um 19:00 Uhr in Neunhof bei Lauf a.d. Pegnitz statt."
    },    
    "chor-button4": {
        imgSrc: "./img/chor.jpg",
        imgAlt: "Chor Bilder",
        text: "Wenn Du Lust und Freude am Singen verspürst, laden wir Dich herzlich ein, bei uns vorbeizuschauen! Neue Sängerinnen und Sänger sind bei uns immer willkommen und werden mit offenen Armen empfangen.<br><br>" +
              "Für alle Fragen und weitere Informationen stehe ich, Ramona Baum, als 1. Vorsitzende gerne zur Verfügung. Schließen Sie sich unserer lebendigen Gemeinschaft an und entdecken Sie die Magie des gemeinsamen Gesangs!<br><br>" +
              "Chorprobe findet einmal pro Woche, dienstags um 19:00 Uhr in Neunhof bei Lauf a.d. Pegnitz statt."
    }
};

function toggleButton(button1, button2) 
{
    const btn1 = document.getElementById(button1);
    const btn2 = document.getElementById(button2);
    // console.log(btn1);
    const isActive = btn1.classList.contains("active");

    toggleClass(btn1, btn2, isActive);

    toggleCard(btn1.id, btn2.id);
}

function toggleClass(btn1, btn2, isActive) 
{
    btn1.classList.toggle("active", !isActive);
    btn2.classList.toggle("active", isActive);
}

function toggleCard(...buttonIds) 
{
    const div = document.querySelector('.about-card-text');

    clearCard(div);

    buttonIds.forEach(buttonId => {
        if (document.getElementById(buttonId).classList.contains("active")) 
        {
            const { imgSrc, imgAlt, text } = buttonContentMap[buttonId];
            updateCard(div, imgSrc, imgAlt, text);
        }
    });
}

function clearCard(div) {
    div.innerHTML = '';
}

function updateCard(div, imgSrc, imgAlt, text) {
    const img = document.createElement('img');
    const p = document.createElement('p');

    img.src = imgSrc;
    img.alt = imgAlt;
    p.classList.add("about-text");
    p.innerHTML = text;

    div.append(img, p);
}
