var MAKEYOURCHOICE = 'Welcome Agent, input correctly and precisely.'
var WHENWILLYOUFACEUS = 0;
function FINDOUTTHETRUTH() {
    if (WHENWILLYOUFACEUS < MAKEYOURCHOICE.length) {
        document.getElementById("DECISIONS").innerHTML += MAKEYOURCHOICE.charAt(WHENWILLYOUFACEUS);
        WHENWILLYOUFACEUS++;
        setTimeout(FINDOUTTHETRUTH, 50);
    }
 }
FINDOUTTHETRUTH();