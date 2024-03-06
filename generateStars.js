  // Generate stars randomly
function generateStars() 
{
    const starContainer = document.createElement('div');
    starContainer.classList.add('sternschnuppen-container');
    document.body.appendChild(starContainer);
    
    for (let i = 0; i < 20; i++) 
    {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.animationDuration = (Math.random() * 5 + 1) + 's'; // Randomize duration
        // star.style.animationDelay = (Math.random() * 2) + 's'; // Randomize delay
        starContainer.appendChild(star);
    }
}

  generateStars();