function sum(x,n){
let res = 0;
let t = Math.sin(x)
for(i=1; i<=n; i++){
   
  res+=t;
  t=Math.sin(t)
 
}
console.log(res.toFixed(3))
}
sum(1,3);