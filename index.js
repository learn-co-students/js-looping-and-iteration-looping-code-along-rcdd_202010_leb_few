// Code your solutions in this file

function writeCards(names,event) {
  let print=[];
  for (let i = 0; i < names.length; i++) {   
  
     print[i]=`Thank you, ${names[i]}, for the wonderful ${event} gift!`;
  }
 
  return print;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");


function countDown(nb) {  
  while (nb >= 0) {
  console.log(nb--);
}
  }
 countDown(10);

