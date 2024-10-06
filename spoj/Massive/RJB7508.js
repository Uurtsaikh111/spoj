function bigNum(a,b,c,d,e,f){
    let big = 0;
    let sum = 0;
    let array = [a,b,c,d,e,f];
    for(i=0; i<array.length; i++){
        if(array[i]>big){
            big=array[i]
           
        }
       
    }
    for(i=0; i<array.length; i++){
        if(array[i]==big){
            sum+=1
        }
    }
    console.log(big,sum);
    }
    bigNum(5,8,8,8,8,7)


    function bigNum(a,b,c,d,e,f){

        let array = [a,b,c,d,e,f];
       let sort = array.sort((a,b)=>b-a)
       let filter = sort.filter((num=>num!==8))
       console.log(filter)
}
        bigNum(5,8,9,10,8,7)