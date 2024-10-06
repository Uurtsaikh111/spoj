function sum(a,b,c,d){
let all = 0;
if(a%11!=0){
    all+=a
}
if(b%11!=0){
    all+=b
}
if(c%11!=0){
    all+=c
}
if(d%11!=0){
    all+=d
}
console.log(all)
}
sum(7,22,13,30)