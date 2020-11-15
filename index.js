// Code your solutions in this file
writeCards(["Ada", "Brendan", "Ali"], "birthday");

function writeCards(array, eventS){
  let message=[];
  for( let i=0; i< array.length; i++){
   message.push(`Thank you, ${array[i]}, for the wonderful ${eventS} gift!`);
  }
  return message;
}

function countDown(x){
  while(x>=0){
    console.log(x);
    x--;
  }
}

countDown(10);