// Code your solutions in this file
function writeCards(a,event){
  let thanksArray=[];
  for (let i in a){
    thanksArray.push(`Thank you, ${a[i]}, for the wonderful ${event} gift!`)
  }
  return thanksArray;
}

function countDown(n){
  for (let i=n; i>=0; i--){
    console.log(i);
  }
}