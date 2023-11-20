var MAKEYOURCHOICE = 'Welcome Agent, input correctly and precisely.'
function FINDOUTTHETRUTH() {
    for (i = 0; i++; i < MAKEYOURCHOICE.length) {
        setTimeout(50);
        document.getElementById("DECISIONS").innerText += MAKEYOURCHOICE.charAt(i);
    }
 }
