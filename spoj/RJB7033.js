function points(a,b,c,d,e,f,g,h,i,j,k,l){

let long = a-b;
let s=Math.sqrt((c-e)*(c-e)+(d-f)*(d-f));
let s3=Math.sqrt((g-j)*(g-j)+(h-k)*(h-k)+(i-l)*(i-l));
console.log((long.toFixed(3))+'\n'+s.toFixed(3)+'\n'+s3.toFixed(3))

}
points(5,-12,3,4,6,8,1,2,3,4,5,6)