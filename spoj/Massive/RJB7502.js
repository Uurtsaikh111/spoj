function find(a,b,c,d,e){
let num = 0;
let array = [a,b,c,d,e];
for(i=0; i<array.length; i++){
    if(60>array[i]){
        num+=1
    }
}

console.log(num)

}
find(96,59,55,76,62)