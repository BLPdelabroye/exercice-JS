var compteur = 0;
var compteur2 = 0;

var MaDiv1 = document.getElementById("Methode2");
MaDiv1.addEventListener("click",UneProcedureQuiChangeLeTexte);

var MaDiv2 = document.getElementById("Methode3");
MaDiv2.addEventListener("mouseover",UneProcedureQuiSurvole);

var MaDiv3 = document.getElementById("Methode4");
MaDiv3.addEventListener("keydown",UneProcedureQuiEcrit);


function UneProcedureQuiEcrit(evenement){
    evenement.target.innerHTML="On a appuyé sur : "+evenement.key;
}

function UneProcedureQuiChangeLeTexte(evenement){
    compteur++;
    evenement.target.innerHTML = "On m'as cliqué dessus "+compteur+" fois";
    MaDiv1.className="divC"
}

function UneProcedureQuiSurvole(evenement){
    compteur2++;
    evenement.target.innerHTML = "On m'as survolé "+compteur2+" fois";
    MaDiv2.className="divB"
}