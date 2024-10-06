function sum(x,n){
let sin = 1;
let result = 0;
for(i=1; i<=n; i++){
    sin = Math.sin(x)*sin
    result+=sin
 
}
console.log(result.toFixed(3))
}
sum(0.5,4)