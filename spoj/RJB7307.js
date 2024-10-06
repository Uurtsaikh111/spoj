function findSmall(n){
let num = 10;
while(n>0){
    if(n%10<num)
    num = n%10
    n=Math.floor(n/10)
}
console.log(num)
}
findSmall(9642)