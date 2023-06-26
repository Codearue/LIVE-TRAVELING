// Formulario login

var usuarios = ["juan", "carlos", "ana", "luisa", "luis"];
var claves = ["juan123", "carlos123", "ana123", "luisa123", "luis123"];

function login(frm){
    var usu=frm.usuario.value;
    let i = -1;
    for(let j=0; j<usuarios.length; j++){
        if(usuarios[j]==usu){
            i=j; break;
        }
    }
    if(i==-1){
        window.event.preventDefault();
        alert("Usuario y/o contraseña incorrecto"); 
        return;
    }
    var clave=frm.clave.value;
    if(clave==claves[i]){
        alert("Bienvenido, "+usu);
    }else{
        window.event.preventDefault();
        alert("Usuario y/o contraseña incorrecto");
    }
}

    //Cambio de imagenes de recomendaciones
  
var lista=new Array("./imagenes/Huacapucllana/paqueteA1.jpg","./imagenes/CristodelPacifico/paqueteA1.jpg","./imagenes/MachuPicchu/paqueteA2.jpg","./imagenes/Montana7colores/paqueteA6.jpg","./imagenes/Kuelap/paqueteC2.jpg","./imagenes/ParqueNacionalManu/paqueteA1.jpg");
var c=0;

function carrusel(){
    var img=document.getElementById("img");
    c++;
    if(c>lista.length-1) c=0;
    img.src=lista[c];

    setTimeout(carrusel,1000);
}

// Efecto redes sociales pagina index

function cambio(e){
    var img=e.getAttribute("data-ar");
    e.src="./imagenes/"+"globales/"+img+"1"+".jpg";
}

function regresa(e){
    var img=e.getAttribute("data-ar");
    e.src="./imagenes/"+"globales/"+img+".jpg";
}

for( var i=0; i<document.getElementsByClassName("social2").length; i++)
{
    document.getElementsByClassName("social2")[i].setAttribute("onmouseover","cambio(this)");
    document.getElementsByClassName("social2")[i].setAttribute("onmouseout","regresa(this)");
}


//Aumentar tamaño de texto

function aumentarTexto(e) {
    e.style.color = "black";
    e.style.fontSize = "18px";
  }
  
  function reducirTexto(e) {
    e.style.color = "black";
    e.style.fontSize = "14px";
  }
  
  for (element of document.getElementsByClassName("articulo-destino")) {
    element.setAttribute("onmouseover", "aumentarTexto(this)");
    element.setAttribute("onmouseout", "reducirTexto(this)");
  }
  carrusel()


 
  
