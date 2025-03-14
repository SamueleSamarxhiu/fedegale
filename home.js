const audio = document.getElementById('click');


document.querySelectorAll('.trigger').forEach(element => {
  element.addEventListener('mouseenter', () => {
    audio.currentTime = 0;
    audio.play();
  });
});
