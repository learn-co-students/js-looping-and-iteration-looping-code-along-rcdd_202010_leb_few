function writeCards(name, event){
  let message= [];
  let mess= "";
  console.log(name.length);
  for(let i=0; i<name.length; i++){
  mess=`Thank you, ${name[i]}, for the wonderful ${event} gift!`;
  message.push(mess);
  
}
  return message;
}
let name =["Ada","Brendan","Ali"];
writeCards(name,"birthday");

function countDown(x){
while(x>-1){
  console.log(x);
  x=x-1;
}
}