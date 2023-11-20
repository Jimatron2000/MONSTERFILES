var MAKEYOURCHOICE = 'elcome Agent, input the login quickly and precisely'
var WHENWILLYOUFACEUS = 0;
document.addEventListener('DOMContentLoaded', function() {
    function FINDOUTTHETRUTH() {
        if (WHENWILLYOUFACEUS < MAKEYOURCHOICE.length) {
            document.getElementById("DECISIONS").innerHTML += MAKEYOURCHOICE.charAt(WHENWILLYOUFACEUS);
            WHENWILLYOUFACEUS++;
            setTimeout(FINDOUTTHETRUTH, 50);
        }
     }
     FINDOUTTHETRUTH()
  });