function findBig(a,b,c,d,e){
let array = [a,b,c,d,e];
let bigOne = 0;
for(i=0; i<array.length; i++){
 if(array[i]>bigOne){
    bigOne=array[i]
 }
}
console.log(bigOne)
}
findBig(3,-2,4,7,-6)