// Optional floating flower animation
document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 8; i++) {
    const flower = document.createElement("div");
    flower.classList.add("floating-flower");
    flower.style.left = `${Math.random() * 100}%`;
    flower.style.animationDuration = `${6 + Math.random() * 6}s`;
    document.body.appendChild(flower);
  }
});

const style = document.createElement("style");
style.textContent = `
  .floating-flower {
    position: fixed;
    top: -50px;
    width: 25px;
    height: 25px;
    background: url('') no-repeat center/cover;
    animation: fall linear infinite;
    opacity: 0.7;
  }

  @keyframes fall {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
  }
`;
document.head.appendChild(style);
