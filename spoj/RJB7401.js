function doubleFor(n){
    let numbers = '';
for(j=1; j<=n; j++){
    for(i=n; i>=1; i--){
      numbers+=i
    }
    numbers+='\n'
}
console.log(numbers)
}
doubleFor(5)