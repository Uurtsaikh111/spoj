function change(n){
let num = 0;
while(n>0){
   num= num*10+n%10 //10aar urjuuleed suuliin toog nemne
    n=Math.floor(n/10)
}
console.log(num)
}
change(123456)