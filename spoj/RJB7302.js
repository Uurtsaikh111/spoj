function sum(n){
let result = 0;
while(n>0 ){

result=result+n%10;
 n=Math.floor(n/10)

}
console.log(result)
}
sum(234)

