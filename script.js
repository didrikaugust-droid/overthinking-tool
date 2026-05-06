dette er min js function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  document.getElementById(pageId).classList.add('active');
}

const input = document.getElementById("input");
const counter = document.getElementById("counter");

if (input) {
  input.addEventListener("input", () => {
    counter.textContent = `${input.value.length} / 300`;
  });
}

function analyze() {
  const text = input.value.trim();

  if (!text) {
    alert("Please write something first 🙂");
    return;
  }

  let score = Math.min(95, Math.floor(text.length * 0.6 + Math.random() * 20));

  document.getElementById("percent").textContent = score + "%";
  document.getElementById("fill").style.width = score + "%";

  const perspectives = [
    "You're trying to control something that doesn't need control.",
    "This feels bigger in your mind than it is in reality.",
    "You don't need more answers — you need more calm.",
    "Take a breath, it's okay.",
    "I think you're making this bigger than it is.",
    "It will all work out 👍
    "If a friend told you this, what would you say to them?"
  ];

  const container = document.getElementById("perspectives");
  container.innerHTML = "";

  perspectives.forEach(t => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = t;
    container.appendChild(div);
  });

  showPage("resultPage");
}
