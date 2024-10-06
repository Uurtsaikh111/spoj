function findSum(a,b,c){
    let sum=0;
let newArray = [a,b,c]
for(i=0; i<newArray.length; i++){
    if(newArray[i]%2==0){
        sum+=newArray[i];
    }
}

console.log(sum)
}
findSum(10,4,5)