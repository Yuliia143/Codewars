// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
function correct(string)
{
    return string.replace(/0/g,"O").replace(/1/g,"I").replace(/5/g,"S");
}
console.log(correct("PAR15"));