function showPage(pageId) {
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
    "You're overthinking this more than necessary.",
    "This feels bigger in your mind than reality.",
    "Take a breath — it's okay.",
    "You're focusing on worst-case scenarios.",
    "This might not matter as much as you think.",
    "You're reacting to uncertainty, not facts.",
    "Most worries feel real but are not certain."
  ];

  const container = document.getElementById("perspectives");
  container.innerHTML = "";

  const shuffled = [...perspectives].sort(() => Math.random() - 0.5);

  shuffled.slice(0, 5).forEach(t => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = t;
    container.appendChild(div);
  });

  showPage("resultPage");
}
