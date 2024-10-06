function find(n,s){
let a = [];
a[0] = 1;
a[1] = 2;
for(i=2; i<n; i++){
    a[s-1]= 0;
    a[i] = a[i-1]+a[i-2]
}
console.log(a[n-1])
}
find(7,4)