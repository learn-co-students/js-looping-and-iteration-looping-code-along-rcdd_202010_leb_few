// Code your solutions in this file

function countDown(x){
  
  while(x>=0){
    console.log(x);
    x--;
  }
}
countDown(11);

// Code your solutions in this file
const t = ['Lisa', 'Kaitlin', 'Jan'];
const s = 'surprise';

function writeCards(w,z){
  let a = ['Thank you, '+w[0]+', for the wonderful '+z+' gift!'];
  for(let i=1; i<w.length;i++){
    a.push('Thank you, '+w[i]+', for the wonderful '+z+' gift!')
    //console.log('Thank you, '+w[i]+', for the wonderful '+z+' gift!')
  }
  return a;
}
writeCards(t,s);