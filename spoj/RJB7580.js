function big(n){
    let digits = n.toString().split('').map(Number)
 let sort = digits.sort((a,b)=>b-a)
console.log(sort.join(''))
}
big(1928374);