function cosinus(n){
    let sum = 0;
for(i=n; i>=1; i--){
sum=Math.cos(i+sum)
}
console.log(sum.toFixed(3))
}
cosinus(3)