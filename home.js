const loader = document.querySelector('.loader');
const audio = document.getElementById('click');

function playSound() {
  audio.currentTime = 0;
  audio.play();
}


window.addEventListener('load', () => {
  setTimeout(() => {
    loader.style.animation = 'animate 1.5s linear forwards';
  }, 5000);
});


document.querySelectorAll('.trigger').forEach(element => {
  element.addEventListener('mouseenter', playSound);
  element.addEventListener('touchstart', playSound, {passive: true});
});
