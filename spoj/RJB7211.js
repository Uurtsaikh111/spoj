function drum(a,n){
    let s=1;
for(i=1; i<=n; i++){
 console.log(a+"^"+i+"="+(s*=a)) 
}

}
drum(3,5)