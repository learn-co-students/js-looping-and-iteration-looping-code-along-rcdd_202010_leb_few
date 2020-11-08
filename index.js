// Code your solutions in this
const messages = [];

function writeCards(array, keyword) {
  for (let i = 0; i < array.length; i++) {
    messages.push(`Thank you, ${array[i]}, for the wonderful ${keyword} gift!`);
  }
  return messages;
}

function countDown(i){
  while(i>=0){
    console.log(i--);
  }
}

countDown(10);