function findDoor(floor,Orts,ail,doorNo){
doorNo--
// let OrtsNo = parseInt(parseInt(doorNo/ail+1)/floor+1)
// let FloorNO = parseInt(doorNo/ail+1)
// if(FloorNO<=floor){
//     FloorNO=FloorNO
// }
// if(FloorNO<=floor*2 && FloorNO>floor){
//     FloorNO = FloorNO-floor
// }
// let AilNo = doorNo%ail+1
let OrtsNo = parseInt(doorNo/(ail*floor))+1
let ailuud = doorNo%(ail*floor)
let FloorNO = parseInt(ailuud/ail+1)
let AilNo = ailuud%ail+1
console.log(OrtsNo,FloorNO,AilNo)
}
findDoor(5,3,4,32)