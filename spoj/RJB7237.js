function average(a,b,c){
let array = [a,b,c];
let sum = 0;
for(i=0; i<array.length; i++){
   sum += array[i]
}
let ave = sum/array.length;
console.log(ave.toFixed(2))
}
average(4.2,5.3,6.24)