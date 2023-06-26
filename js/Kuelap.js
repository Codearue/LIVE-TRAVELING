
//Aumentar tamaño de texto

function aumentarTexto(e) {
    e.style.color = "black";
    e.style.fontSize = "16px";
  }
  
  function reducirTexto(e) {
    e.style.color = "black";
    e.style.fontSize = "14px";
  }
  
  for (element of document.getElementsByClassName("articulo-texto")) {
    element.setAttribute("onmouseover", "aumentarTexto(this)");
    element.setAttribute("onmouseout", "reducirTexto(this)");
  }
  
//Cambio de imagenes en los paquetes

  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const img3 = document.getElementById("img3");


function cambiarImagen(img, nuevaImagen) {
  img.src = nuevaImagen;
  img.style.border = "1px solid black";
}

function volverImagenOriginal(img, imagenOriginal) {
  img.src = imagenOriginal;
  img.style.border = "none";
}


img1.addEventListener("mouseover", function() {
  cambiarImagen(img1, "../imagenes/Kuelap/paqueteA2.jpg");
});

img1.addEventListener("mouseout", function() {
  volverImagenOriginal(img1, "../imagenes/Kuelap/paqueteA1.jpg");
});


img2.addEventListener("mouseover", function() {
  cambiarImagen(img2, "../imagenes/Kuelap/paqueteB2.jpg");
});

img2.addEventListener("mouseout", function() {
  volverImagenOriginal(img2, "../imagenes/Kuelap/paqueteB1.jpg");
});


img3.addEventListener("mouseover", function() {
  cambiarImagen(img3, "../imagenes/Kuelap/paqueteC2.jpg");
});

img3.addEventListener("mouseout", function() {
  volverImagenOriginal(img3, "../imagenes/Kuelap/paqueteC1.jpg");
});
  
//Cambio de imagenes de recomendaciones
 
 var lista=new Array("../imagenes/Kuelap/banner1.jpg","../imagenes/Kuelap/banner2.jpg","../imagenes/Kuelap/banner3.jpg","../imagenes/Kuelap/banner4.jpg");
var c=0;

function carrusel(){
    var img=document.getElementById("img");
    c++;
    if(c>lista.length-1) c=0;
    img.src=lista[c];

    setTimeout(carrusel,1000);
}
carrusel()