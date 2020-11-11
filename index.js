
function contDown(s){
  while (s >=0) {
  console.log(s--);
}
}

function  writeCards(s , b){
  
  for (let i = 0; i < s.length; i++) {
    console.log(`Thank you, ${s[i]} for the wonderful ${b} gift!`);
  }
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

contDown(10);