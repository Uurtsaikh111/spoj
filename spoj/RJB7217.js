function pactriol(n){
    let sum = 1;
if(n%2==0){
    for(i=2; i<=n; i=i+2){
      sum*=i
    }
} else {
    for(i=1; i<=n; i=i+2){
        sum*=i
      }
   
}
console.log(sum)
} 
pactriol(6)