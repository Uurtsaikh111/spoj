function findThree(a,b,c,d){
let result = 0;
let array = [a,b,c,d];
for(i=0; i<array.length; i++){
    if(array[i]%3==0){
        result+=1;
    }
}
console.log(result)
}
findThree(3,12,8,8)