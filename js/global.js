function gira(e){
    e.style.transform="rotateX(360deg)";
    e.style.transition="all 1s";
}

function retorna(e){
    e.style.transform="rotateX(0)";
    e.style.transition="all 1s";
}

for( var i=0; i<document.getElementsByClassName("logoHeader").length;i++){
    document.getElementsByClassName("logoHeader")[i].setAttribute("onmouseover","gira(this)");
    document.getElementsByClassName("logoHeader")[i].setAttribute("onmouseout","retorna(this)");
}