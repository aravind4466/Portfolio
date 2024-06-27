document.addEventListener('DOMContentLoaded', function() {
    const scrollUp = document.querySelector('#scroll-up');
    const scrollDown = document.querySelector('#scroll-down');
  
    scrollUp.addEventListener('click', () => {
      window.scrollBy({
        top: -window.innerHeight,
        behavior: 'smooth'
      });
    });
  
    scrollDown.addEventListener('click', () => {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  });
  