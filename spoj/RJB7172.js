function triangle(a,b,c,){
let big=a;
if(big<b){
    big=b
} 
if(big<c){
   big=c 
} 
    
if(big*big*2>a*a+b*b+c*c){
    return "Obtuse"
} else if(big*big*2==a*a+b*b+c*c){
    return "Right"
} else { return "Acute"}

}

console.log(triangle(3,4,5))