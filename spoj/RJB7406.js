function sum(n){
let sum = 0;

for(i=1; i<=n; i++){
    let t = 1;
  for(j=i; j<=i*2; j++)
    t = t*j
  sum+=t
}
console.log(sum)
}
sum(2)