

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

