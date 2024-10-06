function sum(n){
let si = 0;
let co = 0;
let res = 1;
for(i=1; i<=n; i++){
si+=Math.sin(i);
co+=Math.cos(i);
res*=co/si
}
console.log(res.toFixed(3))
}
sum(2)