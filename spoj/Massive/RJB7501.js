function submit(n,a,b,c,d){
let sum = 0;
let array = [a,b,c,d]
for(i=0; i<array.length; i++){
    if(array[i]>0){
        sum+=array[i]
    }
}
console.log(sum)
}
submit(4,5,-3,4,-10)