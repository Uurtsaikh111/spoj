function findNum(a,b,c,d,e,n){
    let sum = 0;
   let array = [a,b,c,d,e];
   for(i=0; i<n; i++){
    if(array[i]==n){
        sum+=1
    }
   }
   if(sum>0){
    console.log("YES")
   } else { console.log("NO")}
}
findNum(1,2,3,4,5,6)