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
function cambio(e){
    var img=e.getAttribute("data-ar");
    e.src="../imagenes/"+"globales/"+img+"1"+".jpg";
}

function regresa(e){
    var img=e.getAttribute("data-ar");
    e.src="../imagenes/"+"globales/"+img+".jpg";
}

for( var i=0; i<document.getElementsByClassName("social").length; i++)
{
    document.getElementsByClassName("social")[i].setAttribute("onmouseover","cambio(this)");
    document.getElementsByClassName("social")[i].setAttribute("onmouseout","regresa(this)");
}

function cambiarColor(){
    var titulo= document.title;
    if(titulo=="HUACA PUCLLANA"){
        let colores = ["greenyellow", "blue", "cyan"]; 
        let indice = Math.floor(Math.random()*colores.length);
        document.getElementsByTagName("h1")[0].style.color=colores[indice]; 
    }
    else if(titulo=="CRISTO DEL PACIFICO"){
        let colores = ["red", "yellow", "purple"];
        let indice = Math.floor(Math.random()*colores.length);
        document.getElementsByTagName("h1")[0].style.color=colores[indice]; 
    }
    else if(titulo=="Machu Pichu"){
        let colores = ["red", "salmon", "violet"];
        let indice = Math.floor(Math.random()*colores.length);
        document.getElementsByTagName("h1")[0].style.color=colores[indice]; 
    }
    else if(titulo=="MONTAÑA 7 COLORES"){
        let colores = ["skyblue", "greenyellow", "olive"];
        let indice = Math.floor(Math.random()*colores.length);
        document.getElementsByTagName("h1")[0].style.color=colores[indice]; 
    }
    else if(titulo=="Fortaleza de Kuelap"){
        let colores = ["lightyellow", "pink", "orange"];
        let indice = Math.floor(Math.random()*colores.length);
        document.getElementsByTagName("h1")[0].style.color=colores[indice];
    }
    else if(titulo=="PARQUEMANU"){
        let colores = ["lightblue", "red", "gray"]; 
        let indice = Math.floor(Math.random()*colores.length);
        document.getElementsByTagName("h1")[0].style.color=colores[indice];
    }
    else{
        let colores= ["red","purple","green"]
        let indice = Math.floor(Math.random()*colores.length);
        document.getElementsByTagName("h1")[0].style.color=colores[indice];
    }
}

function dia(){

let fecha = new Date();

let d= fecha.getDay();
let m=fecha.getMonth()+1;
let y=fecha.getFullYear();

if(d<10){d='0'+d;}
if(m<10){m='0'+m;}

 document.getElementById("pf").innerHTML="Fecha : "+d+"/"+m+"/"+y;
}

 function hora(){

 let fecha = new Date();
 let h=fecha.getHours();
 let m=fecha.getMinutes();
 let s=fecha.getSeconds();

 if(h<10){h='0'+h;}
 if(m<10){m='0'+m;}
 if(s<10){s='0'+s;}

 document.getElementById("ph").innerHTML="Hora : "+h+":"+m+":"+s;
 }

document.body.setAttribute("onload","setInterval(cambiarColor,1000), dia(), hora()");
