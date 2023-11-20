var MAKEYOURCHOICE = 'elcome Agent, input the login quickly and precisely'
var WHENWILLYOUFACEUS = 0;
function FINDOUTTHETRUTH() {
    if (WHENWILLYOUFACEUS < MAKEYOURCHOICE.length) {
        document.getElementById("DECISIONS").innerText += MAKEYOURCHOICE.charAt(WHENWILLYOUFACEUS);
        WHENWILLYOUFACEUS++;
        setTimeout(FINDOUTTHETRUTH, 50);
    }
 }
FINDOUTTHETRUTH();