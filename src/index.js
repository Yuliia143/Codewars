function maxNumber(n){
    console.log(parseInt(n.toString().split("").sort((a,b)=>(b-a)).join("")));
}
maxNumber(213);