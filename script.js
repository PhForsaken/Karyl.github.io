// Gentle floating hearts effect
const body = document.body;

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 8 + Math.random() * 5 + 's'; // 8–13s
  heart.style.fontSize = 15 + Math.random() * 10 + 'px';
  body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 13000);
}

// Spawn hearts slowly and calmly
setInterval(createHeart, 1200);
