/*Variables globales */
var dsemanas=new Array("Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab");
var meses=new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre");



function parpadear(){
    //agrupo instrucciones
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);

    document.getElementById("huaca").style.color="rgb("+r+","+g+","+b+")";
}

    //setInterval("parpadear()",1000);
    setInterval(parpadear,1000);


    function calendario(){
        var fecha=new Date();
        var dia=fecha.getDate();
    
        var ndias =(new Date(fecha.getFullYear(), fecha.getMonth()+1,0).getDate());
        var dsemana=(new Date(fecha.getFullYear(), fecha.getMonth(), 1).getDay());
    
        var dias=new Array();
    
        for(let i=0; i<dsemana; i++){dias.push("");}
        for(let i=1; i<=ndias; i++){dias.push(i);}
    
        var tabla=document.createElement("table");
        document.getElementById("rigth-bottom").appendChild(tabla);
    
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
                celdas[j].style.backgroundColor = "#C58A3E";
                celdas[j].style.border ="1px solid black";
            }
        }
    }
    document.body.setAttribute("onload","calendario()");