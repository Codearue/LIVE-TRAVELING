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
    document.body.setAttribute("onload","calendario()");