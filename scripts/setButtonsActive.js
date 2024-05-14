button = document.getElementById("chor-button1").classList.add("active");


function toggleButton() 
{
    if(document.getElementById("chor-button1").classList.contains("active"))
    {
        document.getElementById("chor-button2").classList.add("active");
        document.getElementById("chor-button1").classList.remove("active");
    }
    else
    {
        document.getElementById("chor-button1").classList.add("active");
        document.getElementById("chor-button2").classList.remove("active");
    }

    toggleCard();
}

function toggleCard()
{
    img = document.createElement('img');
    p = document.createElement('p');
    div = document.querySelector('.about-card-text');
    console.log(div.contains(img));
    if(document.getElementById("chor-button1").classList.contains("active"))
    {
        if(div.contains(div.querySelector('img')))
        {
            console.log("removed");
            div.removeChild(div.querySelector('img'));
            div.removeChild(div.querySelector('p'));
        }
        img.src = "./img/chor.jpg";
        img.alt = "Chor Bilder";
        p.classList.add("about-text");
        p.innerHTML = "Unser Gesangsverein 1848, Neunhofs ältester Verein, trägt die stolze Last einer reichen Chorgeschichte, die bis ins Jahr 1848 zurückreicht.";
        p.innerHTML += " Unsere Freude am Singen ist seitdem unvermindert und hat sich durch die Jahrzehnte hindurch fortgesetzt.<br>";
        p.innerHTML += "<br> Im Laufe der Zeit hat sich unser Repertoire stetig weiterentwickelt, und wir haben uns musikalisch keine Grenzen gesetzt."; 
        p.innerHTML += " Genres und Epochen durchqueren wir mit Freude und Hingabe. Unser meist dreistimmiger Chor, bestehend aus Sopran, Alt und einer dritten Stimme, besteht aus ungefähr 21 enthusiastischen Mitgliedern.";
        div.append(img, p);
    }
    else if(document.getElementById("chor-button2").classList.contains("active"))
    {
        if(div.contains(div.querySelector('img')))
            {
                console.log("removed");
                div.removeChild(div.querySelector('img'));
                div.removeChild(div.querySelector('p'));
            }
            img.src = "./img/chor2.jpg";
            img.alt = "Chor Bilder";
            p.classList.add("about-text");
            p.innerHTML += "mindert und hat sich durch die Jahrzehnte hindurch fortgesetzt.<br> <br> Im Laufe der Zeit hat sich unser Repertoire stetig weiterentwickelt, und wir haben uns musikalisch keine Grenzen gesetzt. Genres und Epochen durchqueren wir mit Freude und Hingabe. Unser meist dreistimmiger Chor, bestehend aus Sopran, Alt und einer dritten Stimme, besteht aus ungefähr 21 enthusiastischen Mitgliedern.<br>";
            div.append(p, img);
    }
}

{/* <img src="./img/chor.jpg" alt="Chor">
                        <p class="about-text">Unser Gesangsverein 1848, Neunhofs ältester Verein, trägt die stolze Last einer reichen Chorgeschichte, die bis ins Jahr 1848 zurückreicht. Unsere Freude am Singen ist seitdem unvermindert und hat sich durch die Jahrzehnte hindurch fortgesetzt.<br>
                            <br>
                            Im Laufe der Zeit hat sich unser Repertoire stetig weiterentwickelt, und wir haben uns musikalisch keine Grenzen gesetzt. Genres und Epochen durchqueren wir mit Freude und Hingabe. Unser meist dreistimmiger Chor, bestehend aus Sopran, Alt und einer dritten Stimme, besteht aus ungefähr 21 enthusiastischen Mitgliedern.<br>
                        </p> */}