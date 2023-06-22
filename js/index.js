/*Variables globales */
var dsemanas=new Array("Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab");
var meses=new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre");




    function calendario(){
        var fecha=new Date();
        var dia=fecha.getDate();
    
        var ndias =(new Date(fecha.getFullYear(), fecha.getMonth()+1,0).getDate());
        var dsemana=(new Date(fecha.getFullYear(), fecha.getMonth(), 1).getDay());
    
        var dias=new Array();
    
        for(let i=0; i<dsemana; i++){dias.push("");}
        for(let i=1; i<=ndias; i++){dias.push(i);}
    
        var tabla=document.createElement("table");
        document.getElementById("calendario").appendChild(tabla);
    
        var fila=document.createElement("tr");
        tabla.appendChild(fila);
    
        dsemanas.forEach(function(d){
            let celda=document.createElement("th");
            celda.innerHTML=d;
            fila.appendChild(celda);
        });
    
        let i=0;
        dias.forEach(function(d){
            if(i%7==0){
                fila=document.createElement("tr");
                tabla.appendChild(fila);
            }
            i++;
            let celda=document.createElement("td");
            celda.innerHTML=d;
            fila.appendChild(celda);
        });
    
        var celdas= document.getElementsByTagName("td");
        for(var j=0; j<celdas.length;j++){
            if(dia == celdas[j].innerHTML){
                celdas[j].style.backgroundColor = "#781f1f";
                celdas[j].style.color = "white";
                celdas[j].style.border ="2px solid white";
            }
        }
    }

    //Cambio de imagenes de recomendaciones
  
var lista=new Array("./imagenes/Huacapucllana/paqueteA1.jpg","./imagenes/CristodelPacifico/paqueteA1.jpg","./imagenes/MachuPicchu/paqueteA2.jpg","./imagenes/Montaña7colores/paqueteA6.jpg","./imagenes/Kuelap/paqueteC2.jpg","./imagenes/ParqueNacionalManu/paqueteA1.jpg");
var c=0;

function carrusel(){
    var img=document.getElementById("img");
    c++;
    if(c>lista.length-1) c=0;
    img.src=lista[c];

    setTimeout(carrusel,1000);
}


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
  calendario()
  carrusel()

  
