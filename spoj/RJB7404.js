function doubleFor(n){
    let numbers = ''
for(j=n; j>=1; j--){
    for(i=n; i>=j; i--){
      numbers+=' '+i
      
    }
    numbers+='\n'
}
console.log(numbers)
}
doubleFor(5)