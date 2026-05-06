function analyze() {
  const input = document.getElementById("input");
  const results = document.getElementById("results");

  const text = input.value.trim();
  if (!text) return;

  const level = Math.floor(Math.random() * 100);

  results.innerHTML = `
    <div class="card">
      <div class="level">Overthinking level: ${level}%</div>
      <div class="bar">
        <div class="fill" style="width:${level}%"></div>
      </div>
    </div>

    <div class="grid">

      <div class="smallCard">
        🧠 <b>Logisk</b><br/>
        ${random(logical)}
      </div>

      <div class="smallCard">
        😌 <b>Følelse</b><br/>
        ${random(emotional)}
      </div>

      <div class="smallCard">
        😈 <b>Overthinking</b><br/>
        ${random(overthinking)}
      </div>

      <div class="smallCard">
        💬 <b>Venn</b><br/>
        ${random(friend)}
      </div>

    </div>
  `;

  input.value = "";
}

/* DATA */
const logical = [
  "Dette er sannsynligvis ikke så alvorlig.",
  "Det finnes flere forklaringer.",
  "Folk tenker mindre på deg enn du tror."
];

const emotional = [
  "Det er forståelig at du føler det slik.",
  "Dette er helt normalt.",
  "Du håndterer dette bra."
];

const overthinking = [
  "Hva om alt går galt?",
  "Tenk hvis du tar feil...",
  "Hva om dette betyr noe mer?"
];

const friend = [
  "Slapp av 😄 dette går fint",
  "Du overtenker litt nå",
  "Ikke stress, det ordner seg"
];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
