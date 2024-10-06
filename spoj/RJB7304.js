function num(n){
let nums = 0;
while(n>0){
    if(n%2!=0)
    nums+=1
   n=Math.floor(n/10)    
}
console.log(nums)
}
num(23457)