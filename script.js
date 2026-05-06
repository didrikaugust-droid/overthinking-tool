document.addEventListener("DOMContentLoaded", () => {

  const input = document.getElementById("input");

  window.analyze = function () {

    const text = input.value.trim();

    if (!text) {
      alert("Please write something first 🙂");
      return;
    }

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
      "Pause and zoom out — does this matter tomorrow?",
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
  };

});
