function smallNum(a,b,c,d,e){
let small = 10;
let array = [a,b,c,d,e];
for(i=0; i<array.length; i++){
    if(array[i]<small){
        small=array[i]
    }

}
console.log(small)
}
smallNum(3,-2,4,-7,6)