function writeCards(names, event) {
  let x = []
  for ( let i = 0; i < names.length; i++ ) {
    x.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` )
  }
  return x
}
function countDown(starting) {
  while (starting>0) {
    console.log(starting);
    starting-=1;
  }
  console.log(starting);
}