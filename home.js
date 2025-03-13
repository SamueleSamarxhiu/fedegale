setTimeout(() => {
  let loader = document.querySelector('.loader');
  if(loader) {
    console.log("home is loaded");
    loader.style.display = 'none';
  }
}, 500);
