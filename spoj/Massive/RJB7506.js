function all(a,b,c,d,e,f,n){
let sum = 0;
let array = [a,b,c,d,e,f];
for(i=0; i<array.length; i++){
    if(array[i]==n){
        sum+=1
    }
}
console.log(n,sum)
}
all(1,5,4,5,3,9,5)