function findNum(n){
let a = [];
a[0] = 1;
a[1] = 2;
a[2] = 4;
for(i=3; i<n; i++){
    a[i]= a[i-1]+a[i-2]+a[i-3]

}
console.log(a[n-1])
}
findNum(5);