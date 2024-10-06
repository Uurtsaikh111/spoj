function render(a,b,c,d,e){
    let array = [a,b,c,d,e];
    let ODD = 0;
    let Even = 0;
for(i=0; i<array.length; i++){
    if(array[i]%2==1){
        ODD+=1
    } else { Even+=1 }
   }
if(ODD>Even){
    console.log("YES")
} else {console.log("NO")}
}
render(2,3,4,1,7)