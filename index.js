// Code your solutions in this file
const t=['Lisa','Kaitlin', 'Jan'];
const s='surprise';

function writeCards(w , z){
  let a=['Thank you, '+w[0]+', for the wonderful ' +z+' gift!'];
  for (let i=1; i<w.length;i++){
   
   a.push('Thank you, '+w[i]+', for the wonderful ' +z+' gift!');

  }
  return a;

  
}writeCards(t,s);



function countDown(){
  let a=10;
  while (a>-1){
    a--;
    console.log(a);
  }
  
}