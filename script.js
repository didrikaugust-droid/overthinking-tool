function go(page){
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.getElementById(page).classList.add("active");
}

const input=document.getElementById("input");
const counter=document.getElementById("counter");
const results=document.getElementById("results");

if(input){
input.addEventListener("input",()=>{
counter.textContent=`${input.value.length} / 300`;
});
}

function analyze(){

const text=input.value.trim();
if(!text){
alert("Write something first");
return;
}

let score=Math.floor(30+Math.random()*60);

document.getElementById("percent").innerText=score+"%";
document.getElementById("fill").style.width=score+"%";

const data=[
"You are overthinking more than needed",
"This is smaller than your mind makes it",
"Take a breath, you're safe",
"You're predicting problems that don't exist",
"You're focusing on worst-case scenarios.",
"This might not matter as much as you think.",
"Your thoughts are louder than the situation."
"It will be okay, trust yourself"
];

results.innerHTML="";

data.sort(()=>Math.random()-0.5).slice(0,4).forEach(t=>{
let div=document.createElement("div");
div.className="card";
div.innerText=t;
results.appendChild(div);
});

go("result");
}
