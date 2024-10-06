function findNum(n){
let array = [];
array[0]= 1;
array[1]= 1;
for(i=2; i<n; i++){
  if(i%2==0){
    array[i]= array[i/2]+array[i/2-1];
  } else {
    array[i]= array[Math.floor(i/2)]-array[Math.floor(i/2-1)]
  }


}
console.log(array[n-1])
}
findNum(11)


