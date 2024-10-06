function sum(n){
let res = 0;
for(i=1; i<=n; i=i+2){
    res+=i*(i+1)
    console.log(res,i)
}

}
sum(6)