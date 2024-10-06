function findBig(n){
let bigOne = 0;
while(n>0){
if(n%10>bigOne)
bigOne=n%10
n=Math.floor(n/10)
 
}
console.log(bigOne) 
}

findBig(4632)