function findNum(n){
while(n>9){
    n=parseInt(n/10)
}
console.log(n)
}
findNum(2234)