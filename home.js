const audio = document.getElementById('click');

function playSound() {
  audio.currentTime = 0;
  audio.play();
}

document.querySelectorAll('.trigger').forEach(element => {
  element.addEventListener('mouseenter', playSound);
  element.addEventListener('touchstart', playSound, {passive: true});
});
