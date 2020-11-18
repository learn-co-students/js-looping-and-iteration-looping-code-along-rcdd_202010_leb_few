// Code your solutions in this file
let a;
function countDown (a)
{
  while (a>=0){
  console.log(a);
  a--;}
}
let b=[];
let c="";
let d=[];
function writeCards(b,c)
{
  for (let i=0; i<b.length; i++)
  {d[i]="Thank you, "+b[i]+", for the wonderful "+c+" gift!"
}
return d;
}