function product(a,b,c){
let result = 1;
let array=[a,b,c];
for(i=0; i<array.length; i++){
    if(array[i]%2!=0){
        result*=array[i]
    }
}
console.log(result)
}
product(5,2,3)