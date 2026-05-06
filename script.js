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

function analyze() {
  const input = document.getElementById("input").value.trim();
  const results = document.getElementById("results");

  if (!input) {
    alert("Skriv noe først!");
    return;
  }

  results.innerHTML = "";

  const level = Math.floor(Math.random() * 100);

  results.innerHTML += `<div class="level">Overthinking level: ${level}%</div>`;

  results.innerHTML += `<div class="card">🧠 Logisk: ${random(logical)}</div>`;
  results.innerHTML += `<div class="card">😌 Følelse: ${random(emotional)}</div>`;
  results.innerHTML += `<div class="card">😈 Overthinking: ${random(overthinking)}</div>`;
  results.innerHTML += `<div class="card">💬 Venn: ${random(friend)}</div>`;
}
