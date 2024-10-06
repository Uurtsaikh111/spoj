function findSmall(a,b,c,d){
let small=a;
if(small>b){
    small=b
}
if(small>c){
    small=c
}
if(small>d){
    small=d
}
return small
}
console.log(findSmall(3,2,1,4))