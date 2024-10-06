function findYear(n){
    let year = parseInt(n/12)
    let mount = n%12
    console.log(year,mount)
}
findYear(25)