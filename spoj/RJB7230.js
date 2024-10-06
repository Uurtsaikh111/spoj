function sum(x,n){
let sin = 1;
let result ;
let res = 0;
for(i=1; i<=n; i++){
    result = Math.sin(sin*=x)
    res+=result
  
}
console.log(res.toFixed(3))
}
sum(2.5,3)