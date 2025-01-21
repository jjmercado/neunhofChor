if(window.matchMedia("(min-width: 320px)") && window.matchMedia("(max-width: 768px)"))
  {
    window.addEventListener('scroll', function() 
    {
        var element = document.getElementById('text-scroll');
        var position = element.getBoundingClientRect();
      
        // Überprüfen, ob der Text im sichtbaren Bereich liegt
        if (position.top >= 0 && position.bottom <= window.innerHeight) 
        {
          // Vergrößere den Text
          element.style.fontSize = '2rem'; // Ändere die gewünschte Größe hier
        }
        else 
        {
          // Setze die Größe auf die Ausgangsgröße zurück
          element.style.fontSize = '1rem'; // Setze die ursprüngliche Größe hier
        }
    });
  }
  

if(window.matchMedia("(min-width: 1300px)"))
{
  window.addEventListener('scroll', function() 
  {
      var element = document.getElementById('text-scroll');
      var position = element.getBoundingClientRect();
    
      // Überprüfen, ob der Text im sichtbaren Bereich liegt
      if (position.top >= 0 && position.bottom <= window.innerHeight) 
      {
        // Vergrößere den Text
        element.style.fontSize = '2rem'; // Ändere die gewünschte Größe hier
      }
      else 
      {
        // Setze die Größe auf die Ausgangsgröße zurück
        element.style.fontSize = '1rem'; // Setze die ursprüngliche Größe hier
      }
  });
}

