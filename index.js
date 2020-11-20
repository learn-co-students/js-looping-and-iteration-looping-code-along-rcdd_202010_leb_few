// Code your solutions in this file
function writeCards(names,event) {
 let messages=[];
  for(let i=0; i<names.length; i++){
    let message="Thank you, "+names[i]+", for the wonderful surprise gift!";
    messages.push(message);
  }
  return messages;
}

function countDown(n){
  let i=n;
  while (i>=0) {
    console.log(i)
    i--;
  }
}