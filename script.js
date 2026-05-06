function showPage(id){
  document.querySelectorAll('.page').forEach(p =>
    p.classList.remove('active')
  );
  document.getElementById(id).classList.add('active');
}

function analyze(){
  const text = document.getElementById("input").value;

  if(!text){
    alert("Type something first");
    return;
  }

  const percent = Math.floor(Math.random() * 100);

  document.getElementById("percent").innerText = percent + "%";
  document.getElementById("fill").style.width = percent + "%";

  const data = [
    "This might not be as serious as it feels.",
    "You are probably overestimating the situation.",
    "What is the worst realistic outcome?",
    "You will handle this better than you think."
  ];

  const box = document.getElementById("perspectives");
  box.innerHTML = "";

  data.forEach(t => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = t;
    box.appendChild(div);
  });

  showPage('resultPage');
}

setInterval(() => {
  const el = document.getElementById("input");
  if(el){
    document.getElementById("counter").innerText =
      el.value.length + " / 300";
  }
}, 200);
