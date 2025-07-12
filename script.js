function geser(el) {
  const x = Math.floor(Math.random() * 200) - 100;
  const y = Math.floor(Math.random() * 200) - 100;
  el.style.transform = `translate(${x}px, ${y}px)`;
}

function tampilkanJawaban() {
  document.getElementById('fullscreen').style.display = 'flex';
  document.getElementById('loveSound').play();
}
