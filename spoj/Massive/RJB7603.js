function find(n,a,b,c){
let array = [];
array[0]=1;
array[1]=2;


for(i=3; i<n; i++){
    array[a-1] = 0;
    array[b-1] = 0;
    array[c-1] = 0;
    array[i]=array[i-1]+array[i-2]+array[i-3];

}
console.log(array[n-1])
}
find(10,3,4,7,)