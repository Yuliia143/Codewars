// Test.assertEquals(countSmileys([]), 0);
// Test.assertEquals(countSmileys([':D',':~)',';~D',':)']), 4);
// Test.assertEquals(countSmileys([':)',':(',':D',':O',':;']), 2);
// Test.assertEquals(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
// Rules for a smiling face:
//     -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//     -Every smiling face must have a smiling mouth that should be marked with either ) or D.
//     No additional characters are allowed except for those mentioned.
function countSmileys(arr) {
    let str = arr.toString();
    // let res = str.match(/:\)|;\)|:D|;D|;-D|:-D|:~D|;~D|;~\)|:~\)|;-\)|:-\)?/g);
    let res = str.match(/[:;]{1}[-~]{0,1}?[)D]{1}/g);
    return(res==null)?0:res.length;
}
console.log(countSmileys([';D',':D']));