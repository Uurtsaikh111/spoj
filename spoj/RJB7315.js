function reduce(a,b){
let n;

for(i=1; i<=a; i++){
    if(a%i==0 && b%i==0){
        n=i
    }
}
let s = a/n+'/'+b/n
console.log(s)
}
reduce(9,15)