/* style.css - pink scrapbook collage theme (square-centered, responsive) */

:root {
  --bg: #ffd9ea;
  --card-bg: #fff6fb;
  --accent: #ff6fa3;
  --muted: #f7d7e4;
  --shadow: rgba(18, 18, 24, 0.08);
  --paper: #fff7fb;
  --font-sans: "Helvetica Neue", Arial, sans-serif;
}

* { box-sizing: border-box; }
html,body { height: 100%; margin: 0; font-family: var(--font-sans); background: linear-gradient(180deg,#ffeef7 0%, #ffd9ea 100%); -webkit-font-smoothing:antialiased; }

.page-wrapper {
  min-height: 100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 28px;
}

/* square card (ideal 1080x1080 visual) */
.card {
  width: min(92vmin, 980px);
  aspect-ratio: 1 / 1;
  background: linear-gradient(180deg, var(--card-bg), #fff1f6);
  border-radius: 18px;
  box-shadow: 0 12px 30px var(--shadow), inset 0 -6px 12px rgba(255,255,255,0.6);
  padding: 28px;
  position: relative;
  overflow: hidden;
  display:flex;
  flex-direction:column;
  gap: 12px;
  transform-origin: center;
  animation: pop 450ms ease both;
}

@keyframes pop {
  from { transform: scale(.98); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.card-header { text-align:center; margin-top:6px; }
.title {
  font-size: clamp(22px, 3.2vmin, 36px);
  letter-spacing: .6px;
  margin: 0;
  color: #d4006b;
}
.subtitle {
  margin: 6px 0 0;
  color: #9b355e;
  font-size: clamp(12px, 1.8vmin, 16px);
  opacity: .92;
}

/* collage area */
.collage {
  flex: 1;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  align-items: center;
  justify-items: center;
  padding: 18px;
}

/* Polaroid frames */
.polaroid {
  width: clamp(160px, 26vmin, 320px);
  background: var(--paper);
  border-radius: 8px;
  padding: 12px 12px 18px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  transform-origin: center;
  position: relative;
  user-select: none;
  transition: transform .28s ease;
}

/* slight rotation for scrapbook feel */
.p1 { transform: rotate(-6deg) translateY(-8%); }
.p2 { transform: rotate(4deg) translateX(6%); }
.p3 { transform: rotate(-2deg) translateY(6%); }

.polaroid:hover { transform: translateY(-6px) rotate(0deg) scale(1.02); z-index: 5; }

/* photo area inside polaroid */
.photo {
  width: 100%;
  height: clamp(120px, 18vmin, 220px);
  background: linear-gradient(180deg,#f7f3f8,#fff);
  border-radius: 6px;
  overflow: hidden;
  display:flex;
  align-items:center;
  justify-content:center;
  position: relative;
}

.photo img { width:100%; height:100%; object-fit: cover; display:block; }

/* caption below polaroid */
.caption {
  font-size: 13px;
  color: #8a3a63;
  margin-top: 8px;
  text-align: left;
  letter-spacing: .3px;
}

/* decorative tape pieces */
.tape {
  position:absolute;
  width: 56px;
  height: 20px;
  background: linear-gradient(90deg,#fff1f3,#ffedf7);
  border-radius: 4px;
  transform: rotate(-6deg);
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
  background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.35) 0 6px, transparent 6px 12px);
  opacity: .95;
}
.tape-top { top: -8px; left: 18%; transform: rotate(-6deg); }
.tape-left { left: -10px; top: 22%; transform: rotate(24deg); width: 46px; }
.tape-bottom { bottom: -10px; right: 22%; transform: rotate(-14deg); }

/* QR box */
.qr-box {
  position: absolute;
  right: 18px;
  bottom: 18px;
  width: clamp(90px, 14vmin, 140px);
  text-align: center;
  background: linear-gradient(180deg,#fff,#fff7fb);
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
  transition: transform .25s ease;
}
.qr-box:hover { transform: translateY(-6px) scale(1.03); z-index: 6; }
.qr-inner { width: 100%; height: 100%; display:flex; align-items:center; justify-content:center; padding:8px; }
.qr-svg { width: 68%; height: auto; fill: #c6457a; opacity: .95; }

/* footer */
.card-footer {
  display:flex;
  gap: 12px;
  align-items:center;
  justify-content:center;
  padding-bottom: 6px;
}
.btn {
  background: linear-gradient(180deg,#ff8fbc,#ff6699);
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 6px 12px rgba(255,105,152,0.18);
}
.btn:active { transform: translateY(1px); }

/* music toggle */
.music-toggle {
  display:flex;
  gap:8px;
  align-items:center;
  font-size: 14px;
  color: #7a2b4d;
}
.music-toggle input { margin: 0; }

/* floating hearts */
.floaters { position:absolute; inset:0; pointer-events:none; overflow:visible; }
.heart {
  position:absolute;
  font-size: clamp(18px, 3.2vmin, 40px);
  opacity: .95;
  transform-origin:center;
  animation: float 6s ease-in-out infinite;
  filter: drop-shadow(0 6px 12px rgba(200,70,120,0.08));
}
.h1 { left: 6%; top: 12%; color: #ff7aa3; animation-delay: 0s; }
.h2 { left: 84%; top: 28%; color: #ff4b8a; animation-delay: 1.2s; font-size: clamp(12px,2.5vmin,26px); }
.h3 { left: 46%; top: 78%; color: #ffa3c4; animation-delay: 2.4s; transform: rotate(-12deg); }

@keyframes float {
  0% { transform: translateY(0) scale(1) rotate(0); opacity: .95; }
  50% { transform: translateY(-18px) scale(1.07) rotate(6deg); opacity: .98; }
  100% { transform: translateY(0) scale(1) rotate(0); opacity: .95; }
}

/* file input (hidden) */
.file-input { position:absolute; inset:0; opacity:0; width:100%; height:100%; cursor:pointer; }

/* responsive adjustments */
@media (max-width:640px) {
  .card { padding: 16px; }
  .collage { gap:8px; grid-template-columns: 1fr; }
  .qr-box { right: 12px; bottom: 12px; }
}
