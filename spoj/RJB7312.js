function check(n){
for(i=1; n%i==0; i++){
n=n/i
console.log(n,i)
}
if(n ==1){
    console.log(i)
} else {
    console.log("No")
}
}
check(24)