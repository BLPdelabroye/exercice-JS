async function AfficherDuTexte() {
    var MaDiv= document.getElementById("fetch");
    const reponse = await fetch("http://192.168.65.138/js11.json");
    const text = await reponse.json();
    console.log(text);
    MaDiv.innerHTML=(text);
  } 
  setTimeout(()=>{
    AfficherDuTexte();
  },"1000");