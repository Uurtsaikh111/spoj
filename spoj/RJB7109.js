function findFive(a,b,c){
    let result = 0;
    let array = [a,b,c];
    for(i=0; i<array.length; i++){
        if(array[i]==5){
            result+=1
        }
    }
    console.log(result)
}
findFive(5,5,5)