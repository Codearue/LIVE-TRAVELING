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
  cambiarImagen(img1, "../imagenes/Huacapucllana/paqueteA2.jpg");
});

img1.addEventListener("mouseout", function() {
  volverImagenOriginal(img1, "../imagenes/Huacapucllana/paqueteA1.jpg");
});


img2.addEventListener("mouseover", function() {
  cambiarImagen(img2, "../imagenes/Huacapucllana/paqueteB2.jpg");
});

img2.addEventListener("mouseout", function() {
  volverImagenOriginal(img2, "../imagenes/Huacapucllana/paqueteB1.jpg");
});


img3.addEventListener("mouseover", function() {
  cambiarImagen(img3, "../imagenes/Huacapucllana/paqueteC2.jpg");
});

img3.addEventListener("mouseout", function() {
  volverImagenOriginal(img3, "../imagenes/Huacapucllana/paqueteC1.jpg");
});
  
//Cambio de imagenes de recomendaciones
 
var lista=new Array("../imagenes/Huacapucllana/banner1.jpg","../imagenes/Huacapucllana/banner2.jpg","../imagenes/Huacapucllana/banner3.jpg","../imagenes/Huacapucllana/banner4.jpg");
var c=0;

function carrusel(){
    var img=document.getElementById("img");
    c++;
    if(c>lista.length-1) c=0;
    img.src=lista[c];

    setTimeout(carrusel,1000);
}
carrusel()