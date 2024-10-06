function bigNum(a,b,c,d,e){
let big = 0;
let num = 0;
let array = [a,b,c,d,e];
for(i=0; i<array.length; i++){
    if(array[i]>big){
        big=array[i]
        num = i+1
    }
}
console.log(big,num);
}
bigNum(9,10,8,10,6)