function findTime(n){
    let hour = parseInt(n/3600)
    let minute = parseInt(n%3600/60)
    let sec = n%3600
    console.log(hour,minute,sec)
}
findTime(3612)