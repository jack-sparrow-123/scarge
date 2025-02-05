
document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.querySelector('.spaceship');
    const explosion = document.querySelector('.explosion');
    const smoke = document.querySelector('.smoke');
    
    spaceship.addEventListener('animationend', () => {
      spaceship.style.display = 'none';
      explosion.style.display = 'block';
      smoke.style.display = 'none';
    });
  });
  