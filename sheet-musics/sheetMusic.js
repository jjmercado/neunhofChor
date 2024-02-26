const sheetMusic =  ["svg/note-vectors_Ebene 2.svg", "svg/note-vectors_Ebene 3.svg", "svg/note-vectors_Ebene 4.svg", "svg/note-vectors_Ebene 5.svg", 
                    "svg/note-vectors_Ebene 6.svg", "svg/note-vectors_Ebene 7.svg", "svg/note-vectors_Ebene 8.svg", "svg/note-vectors_Ebene 9.svg",
                    "svg/note-vectors_Ebene 10.svg", "svg/note-vectors_Ebene 11.svg", "svg/note-vectors_Ebene 12.svg", "svg/note-vectors_Ebene 13.svg",
                    "svg/note-vectors_Ebene 14.svg", "svg/note-vectors_Ebene 15.svg", "svg/note-vectors_Ebene 16.svg", "svg/note-vectors_Ebene 17.svg",
                    "svg/note-vectors_Ebene 18.svg", "svg/note-vectors_Ebene 19.svg", "svg/note-vectors_Ebene 20.svg", "svg/note-vectors_Ebene 21.svg",
                    "svg/note-vectors_Ebene 22.svg", "svg/note-vectors_Ebene 25.svg",
                    "svg/note-vectors_Ebene 26.svg"];
                    
                    
for (let index = 0; index < sheetMusic.length; index++) 
{
    const div = document.getElementById("sheet-music");
    let img = document.createElement("img");
    img.src = sheetMusic[index];
    img.id = `sheet-music${index}`;
    div.appendChild(img);
}
