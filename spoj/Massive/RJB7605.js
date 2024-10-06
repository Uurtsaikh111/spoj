function pay(a,b,c,d,e,f,g,h){
    let array = [a,b,c,d,e,f,g,h];
    let shat = [];
    let sum = 0;
    for(i=1; i<array.length; i=i+2){
    sum+=array[i]
   shat.push(i+1)
    }
   
    console.log(sum+'\n'+shat.join(','))
    }
    pay(2,3,4,2,2,4,3,5)