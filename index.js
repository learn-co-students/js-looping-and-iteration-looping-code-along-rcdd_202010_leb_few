
  const messages = [];
  const writeCards = (array, eventName) => {
  for (let i=0; i<array.length; i++ ) {
  let message = 'Thank you, ' +  array[i] + ', for the wonderful ' + eventName + ' gift!';
  messages.push(message);
  }
  return messages;
}


const countDown=(x)=>{
while (x>=0){
console.log(x--);
}
}




//  `Thank you, ${arr[i]} for the wonderful ${event} gift! `;
//  const myArray = new Array ();

// "Thank you, Ada, for the wonderful birthday gift!"
