function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  document.getElementById(pageId).classList.add('active');
}

// live character counter
const input = document.getElementById("input");
const counter = document.getElementById("counter");

if (input) {
  input.addEventListener("input", () => {
    counter.textContent = `${input.value.length} / 300`;
  });
}

// MAIN ANALYZE FUNCTION
function analyze() {
  const text = input.value.trim();

  if (!text) {
    alert("Please write something first 🙂");
    return;
  }

  // simple overthinking score
  let score = Math.min(95, Math.floor(text.length * 0.6 + Math.random() * 20));

  // update UI
  document.getElementById("percent").textContent = score + "%";
  document.getElementById("fill").style.width = score + "%";

  // perspectives
  const perspectives = [
    "You're trying to control something that doesn't need control.",
    "This feels bigger in your mind than it is in reality.",
    "You don't need more answers — you need more calm.",
    "If a friend told you this, what would you say to them?"
  ];

  const container = document.getElementById("perspectives");
  container.innerHTML = "";

  perspectives.forEach(text => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = text;
    container.appendChild(div);
  });

  showPage("resultPage");
}
