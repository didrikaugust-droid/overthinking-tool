function analyze() {
  const text = input.value.trim();

  if (!text) {
    alert("Please write something first 🙂");
    return;
  }

  // score (litt mer naturlig variasjon)
  let score = Math.floor(25 + Math.random() * 70);

  document.getElementById("percent").textContent = score + "%";
  document.getElementById("fill").style.width = score + "%";

  const perspectives = [
    "You're trying to control something that doesn't need control.",
    "This feels bigger in your mind than it is in reality.",
    "You don't need more answers — you need more calm.",
    "Take a breath, it's okay.",
    "You're overanalyzing a situation that might be simple.",
    "This might not mean what your mind is telling you it means.",
    "There is a good chance this is not as important as it feels.",
    "You may be filling gaps with worst-case assumptions.",
    "Pause and zoom out — does this matter tomorrow?",
    "Your thoughts are running faster than reality right now.",
    "You're reacting to uncertainty, not facts.",
    "Even if something is wrong, you will handle it.",
    "Most worries feel real but are not certain.",
    "Try asking: what do I KNOW vs what do I THINK?",
    "Your mind is predicting, not observing."
  ];

  const container = document.getElementById("perspectives");
  container.innerHTML = "";

  // shuffle + velg tilfeldig miks
  const shuffled = [...perspectives].sort(() => Math.random() - 0.5);

  const amount = 5; // hvor mange svar du vil vise

  shuffled.slice(0, amount).forEach(t => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = t;
    container.appendChild(div);
  });

  showPage("resultPage");
}
