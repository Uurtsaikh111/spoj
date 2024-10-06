function product(n){
let prod = 1;
for(i=n; i>=1; i--){
    prod*=(1+1/(i*i))
}
console.log(prod.toFixed(3))
}
product(3)