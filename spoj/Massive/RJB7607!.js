function find(n){
let array = [];
array[0]= 1;
array[1]= 1;
for(i=2; i<n; i++){
    array[i] = (array[i-1]+array[i-2])%10;
    
}
console.log(array[n-1])
}
find(7)

