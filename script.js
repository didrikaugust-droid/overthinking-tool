const container = document.getElementById("perspectives");
const input = document.getElementById("input");

function analyze() {
  const text = input.value.trim();

  if (!text) {
    alert("Please write something first 🙂");
    return;
  }

  let score = Math.floor(25 + Math.random() * 70);

  document.getElementById("percent").textContent = score + "%";
  document.getElementById("fill").style.width = score + "%";

  const perspectives = [
    "You're overthinking this more than necessary.",
    "This feels bigger in your mind than reality.",
    "Take a breath — it's okay.",
    "You're focusing on worst-case scenarios.",
    "This might not matter as much as you think."
  ];

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
