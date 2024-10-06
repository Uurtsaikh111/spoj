function doubleFor(a){
    let numbers = ''
for(j=1; j<=a; j++){
    for(i=1; i<=a+1-j; i++){
    numbers+=" "+i
    }
    numbers+='\n'
}
console.log(numbers)
}
doubleFor(5)