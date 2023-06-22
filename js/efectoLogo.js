
// girar logo header 
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

function giraB(e){
    e.style.transform="rotateY(360deg)";
    e.style.transition="all 1s";
}

function retornaB(e){
    e.style.transform="rotateY(0)";
    e.style.transition="all 1s";
}

for( var i=0; i<document.getElementsByClassName("logo").length;i++){
    document.getElementsByClassName("logo")[i].setAttribute("onmouseover","giraB(this)");
    document.getElementsByClassName("logo")[i].setAttribute("onmouseout","retornaB(this)");
}

