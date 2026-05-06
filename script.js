alert("JS LOADED");
window.analyze = function () {
  const input = document.getElementById("input");
  const text = input.value.trim();

  if (!text) {
    alert("Please write something first 🙂");
    return;
  }

  let score = Math.floor(20 + Math.random() * 75);

  document.getElementById("percent").textContent = score + "%";
  document.getElementById("fill").style.width = score + "%";

  const container = document.getElementById("perspectives");
  container.innerHTML = "";

  const perspectives = [
    "You're overthinking this more than necessary.",
    "This feels bigger in your mind than reality.",
    "Take a breath — it's okay.",
    "You're focusing on worst-case scenarios.",
    "This might not matter as much as you think."
  ];

  const shuffled = [...perspectives].sort(() => Math.random() - 0.5);

  shuffled.slice(0, 5).forEach(t => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = t;
    container.appendChild(div);
  });

  document.getElementById("resultPage").classList.add("active");
  document.getElementById("home").classList.remove("active");
};
