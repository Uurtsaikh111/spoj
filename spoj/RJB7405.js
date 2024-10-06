function doubleFor(a){
    let numbers = ''
for(j=a; j>=1; j--){
    for(i=a; i>=a+1-j; i--){
    numbers+=' '+i
    }
    numbers+='\n'
}
console.log(numbers)
}
doubleFor(5)