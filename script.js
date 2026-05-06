body {
  margin: 0;
  font-family: system-ui;
  background: radial-gradient(circle at top, #1b1b3a, #0d0d14);
  color: white;
}

/* NAV */
.nav {
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
}

.nav-links {
  display: flex;
  gap: 20px;
  align-items: center;
}

.mode {
  background: rgba(255,255,255,0.1);
  border: none;
  padding: 8px 14px;
  border-radius: 20px;
  color: white;
}

/* HERO */
.hero {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  padding: 60px;
  align-items: center;
}

.hero-left h1 {
  font-size: 48px;
  margin: 0;
}

.hero-left h2 {
  font-size: 36px;
  margin: 10px 0;
  background: linear-gradient(90deg, #c084fc, #e879f9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* INPUT */
.inputBox {
  margin-top: 20px;
  display: flex;
  gap: 10px;
  padding: 12px;
  border-radius: 16px;

  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(12px);
}

textarea {
  flex: 1;
  background: transparent;
  border: none;
  color: white;
  outline: none;
}

button {
  background: linear-gradient(135deg, #c084fc, #9333ea);
  border: none;
  border-radius: 10px;
  padding: 10px 16px;
  color: white;
  cursor: pointer;
}

/* BADGES */
.badges {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.badges div {
  background: rgba(255,255,255,0.05);
  padding: 10px;
  border-radius: 12px;
  font-size: 13px;
}

/* IMAGE */
.hero-right img {
  width: 300px;
}

/* RESULTS */
.results {
  padding: 40px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}

/* CARD */
.card {
  background: rgba(255,255,255,0.05);
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(12px);
}

/* LEVEL BAR */
.bar {
  height: 8px;
  background: rgba(255,255,255,0.1);
  border-radius: 10px;
  margin-top: 10px;
}

.fill {
  height: 100%;
  background: linear-gradient(90deg,#facc15,#ec4899);
  border-radius: 10px;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 10px;
}

.smallCard {
  padding: 12px;
  border-radius: 12px;
  background: rgba(255,255,255,0.05);
}

/* TIPS */
.tips {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
