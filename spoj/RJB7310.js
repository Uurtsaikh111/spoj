function check(n){
while(n%2==0){
    n/=2
    console.log(n)
}
if(n==1){
    console.log("YES")
} else {
    console.log("NO")

}
}
check(64)