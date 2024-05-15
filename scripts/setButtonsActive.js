document.getElementById("chor-button1").classList.add("active");


function toggleButton(button1, button2) 
{
    const btn1 = document.getElementById(button1);
    const btn2 = document.getElementById(button2);

    const isActive = btn1.classList.contains("active");
    toggleClass(btn1, btn2, isActive);

    toggleCard();
}

function toggleClass(btn1, btn2, isActive) 
{
    btn1.classList.toggle("active", !isActive);
    btn2.classList.toggle("active", isActive);
}


function toggleCard() 
{
    const div = document.querySelector('.about-card-text');
    const button1Active = document.getElementById("chor-button1").classList.contains("active");
    const button2Active = document.getElementById("chor-button2").classList.contains("active");

    clearCard(div);

    if (button1Active) 
    {
        updateCard(div, "./img/chor.jpg", "Chor Bilder", getChorText1());
    } 
    else if (button2Active) 
    {
        updateCard(div, "./img/chor2.jpg", "Chor Bilder", getChorText2());
    }
}

function clearCard(div) 
{
    const img = div.querySelector('img');
    const p = div.querySelector('p');
    if (img) div.removeChild(img);
    if (p) div.removeChild(p);
}

function updateCard(div, imgSrc, imgAlt, text) 
{
    const img = document.createElement('img');
    const p = document.createElement('p');

    img.src = imgSrc;
    img.alt = imgAlt;
    p.classList.add("about-text");
    p.innerHTML = text;

    div.append(img, p);
}

function getChorText1() 
{
    return "Unser Gesangsverein 1848, Neunhofs ältester Verein, trägt die stolze Last einer reichen Chorgeschichte, die bis ins Jahr 1848 zurückreicht. " +
           "Unsere Freude am Singen ist seitdem unvermindert und hat sich durch die Jahrzehnte hindurch fortgesetzt.<br><br>" +
           "Im Laufe der Zeit hat sich unser Repertoire stetig weiterentwickelt, und wir haben uns musikalisch keine Grenzen gesetzt. " +
           "Genres und Epochen durchqueren wir mit Freude und Hingabe. Unser meist dreistimmiger Chor, bestehend aus Sopran, Alt und einer dritten Stimme, " +
           "besteht aus ungefähr 21 enthusiastischen Mitgliedern.";
}

function getChorText2() 
{
    return "mindert und hat sich durch die Jahrzehnte hindurch fortgesetzt.<br><br>" +
           "Im Laufe der Zeit hat sich unser Repertoire stetig weiterentwickelt, und wir haben uns musikalisch keine Grenzen gesetzt. " +
           "Genres und Epochen durchqueren wir mit Freude und Hingabe. Unser meist dreistimmiger Chor, bestehend aus Sopran, Alt und einer dritten Stimme, " +
           "besteht aus ungefähr 21 enthusiastischen Mitgliedern.<br>";
}


{/* <img src="./img/chor.jpg" alt="Chor">
                        <p class="about-text">Unser Gesangsverein 1848, Neunhofs ältester Verein, trägt die stolze Last einer reichen Chorgeschichte, die bis ins Jahr 1848 zurückreicht. Unsere Freude am Singen ist seitdem unvermindert und hat sich durch die Jahrzehnte hindurch fortgesetzt.<br>
                            <br>
                            Im Laufe der Zeit hat sich unser Repertoire stetig weiterentwickelt, und wir haben uns musikalisch keine Grenzen gesetzt. Genres und Epochen durchqueren wir mit Freude und Hingabe. Unser meist dreistimmiger Chor, bestehend aus Sopran, Alt und einer dritten Stimme, besteht aus ungefähr 21 enthusiastischen Mitgliedern.<br>
                        </p> */}