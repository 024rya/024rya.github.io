let upto = 0;
let goal = 1500;
let speed = 7;
function incNbr(params) {
  upto=0
  let counts = setInterval(updated);
}
function updated() {
  let count = document.getElementById("counter");
  upto = upto+speed
  count.innerHTML = upto;
  if (upto > goal) {
    count.innerHTML=goal
    clearInterval(counts);
  }
}
