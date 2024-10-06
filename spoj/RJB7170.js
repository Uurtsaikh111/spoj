function findFloor(a,b,c){
    c--
let floor = parseInt(c/b+1)
let door = c%b+1
console.log(floor,door)
}
findFloor(5,4,9)