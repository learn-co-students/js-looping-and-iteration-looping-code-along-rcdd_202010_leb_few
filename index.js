//for loop



function writeCards(array, keyword) {
const messages = [];
  for (let i = 0; i < array.length; i++) {
    messages.push (`Thank you, ${array[i]}, for the wonderful ${keyword} gift!`);
  }
  return messages;
}


//while loop

 function countDown(i){
  while(i>=0){
    console.log(i--);
  }
}
countDown(10);