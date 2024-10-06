function render(n){
for(i=n; i>=0; i=i-3){
    console.log(i)
}
}
render(10);

function render2(a,b){
for(i=b; i<=a; i++){
    console.log(i)
}
}
render2(15,9)

function render3(a,b,n){
    let array = [];
for(i=a; i<=b; i=i+n){
    array.push(i)
}
console.log(array)
}
render3(10,20,2)