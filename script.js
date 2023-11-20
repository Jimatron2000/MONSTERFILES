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
    function check() {
        var a = document.getElementById("MONSTER").value;
        var b = document.getElementById("THEKEYWORD").value;
        if (a == "Jimmy Jimatron" && b == "other") {
            window.location.replace(SklNTVkgSklNQVRST04g.html)
        }
        else {
            window.location.replace("https://www.youtube.com/watch?v=hiRacdl02w4")
        }
    }
  });