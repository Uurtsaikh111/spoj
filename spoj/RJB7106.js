function product(a,b,c,d){
    let prod = 1
    let array = [a,b,c,d]
    for(i=0; i<array.length; i++){
        if(array[i]<5){
            prod*=array[i]
        }
    }
    
console.log(prod)
}
product(3,6,2,4)