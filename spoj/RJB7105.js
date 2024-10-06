function findSum(a,b,c,d){
let sum=0
let newArray = [a,b,c,d]
  for(i=0;i<newArray.length;i++){
    if(newArray[i]>80){
      sum+=newArray[i]
    }
  }
return sum
}
console.log(findSum(85,75,80,69))