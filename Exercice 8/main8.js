function changementText(parametre1){
    setTimeout(function(){
        alert("Le texte va se modifier")
        document.getElementById("madiv").innerHTML = parametre1
    }, 2000);
}

changementText("Hello")