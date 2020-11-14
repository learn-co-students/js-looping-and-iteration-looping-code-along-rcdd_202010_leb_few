// Code your solutions in this file
let results = [];
function writeCards(name,event){
  for(let i=0; i < name.length; i++){
  
     results=[...results, `Thank you, ${name[i]}, for the wonderful ${event} gift!`] ;
  }
  return results;
}


function countDown(q){
  while (q>=0){
    console.log(q--)
  }
}
