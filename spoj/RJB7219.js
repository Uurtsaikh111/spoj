function sum(n){
let pac = 1;
res = 0;
for(i=1; i<=n; i++){
    pac*=i
    res+=pac
}
console.log(res)
}
sum(5)