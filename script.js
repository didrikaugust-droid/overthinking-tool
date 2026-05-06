const logical = [
  "Dette er sannsynligvis ikke så alvorlig som det føles.",
  "Folk er ofte opptatt – det handler ikke nødvendigvis om deg.",
  "Det finnes flere forklaringer enn den verste du tenker på."
];

const emotional = [
  "Jeg skjønner at dette føles stressende.",
  "Det er helt normalt å tenke sånn iblant.",
  "Du er ikke alene om å føle det slik."
];

const overthinking = [
  "Hva om det faktisk ER noe galt?",
  "Tenk hvis du har misforstått alt...",
  "Hva om dette betyr noe mer?"
];

const friend = [
  "Slapp av, dette går bra 😄",
  "Du overtenker litt nå, chill!",
  "Det er ikke så deep som du tror."
];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function addMessage(text, type) {
  const results = document.getElementById("results");

  const div = document.createElement("div");
  div.classList.add("card", type);
  div.textContent = text;

  results.appendChild(div);
  results.scrollTop = results.scrollHeight;
}

function analyze() {
  const input = document.getElementById("input");
  const text = input.value.trim();

  if (!text) return;

  // bruker input
  addMessage(text, "user");

  const level = Math.floor(Math.random() * 100);

  setTimeout(() => {
    addMessage(`Overthinking level: ${level}%`, "ai");

    addMessage("🧠 Logisk: " + random(logical), "ai");
    addMessage("😌 Følelse: " + random(emotional), "ai");
    addMessage("😈 Overthinking: " + random(overthinking), "ai");
    addMessage("💬 Venn: " + random(friend), "ai");
  }, 300);

  input.value = "";
}
