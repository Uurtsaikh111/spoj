function findNum(n){
let digits = n.toString().split('').map(Number)
let sortBig = digits.sort((a,b)=>b-a)
let big = sortBig.join('')
let sortSmall = digits.sort((a,b)=>a-b)
let small = sortSmall.join('')
let res = big-small
console.log(big + '\n' + small + '\n' +res)
}
findNum(1234)