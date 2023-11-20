var MAKEYOURCHOICE = 'Welcome Agent, input correctly and precisely.'
var WHENWILLYOUFACEUS = 0;
var hasran = true;
function FINDOUTTHETRUTH() {
    if (WHENWILLYOUFACEUS < MAKEYOURCHOICE.length && hasran == true) {
        document.getElementById("DECISIONS").innerHTML += MAKEYOURCHOICE.charAt(i);
        WHENWILLYOUFACEUS++;
        setTimeout(FINDOUTTHETRUTH, 50);
    } else {
        hasran = false;
    }
 }