function check(n){
let num = 0;
let a=n;
while(n>0){
    num=num*10+n%10
    n=Math.floor(n/10)

}

if(num==a){
    console.log("Yes")
} else { console.log("NO")}
}
check(12321)