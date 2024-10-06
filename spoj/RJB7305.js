function fundNum(n,a){
let count = 0;
while(n>0){
    if(n%10==a)
    count+=1
    n=Math.floor(n/10)
}
console.log(count)
}
fundNum(23453,3)