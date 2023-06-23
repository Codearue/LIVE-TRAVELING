document.addEventListener("DOMContentLoaded", function() {
    document
      .querySelector("input[name='usuario']")
      .addEventListener("keypress", function(event) {
        var ascii = event.keyCode || event.which;
        if (!(ascii >= 65 && ascii <= 90) && !(ascii >= 97 && ascii <= 122)) {
          event.preventDefault();
        }
      });

    document
      .querySelector("input[name='clave']")
      .addEventListener("keypress", function(event) {
        var ascii = event.keyCode || event.which;
        if (!(ascii >= 65 && ascii <= 90) && !(ascii >= 97 && ascii <= 122)) {
          event.preventDefault();
        }
      });
  });

  function cargar(frm) {
    const usuarioValue = frm.usuario.value;
    const claveValue = frm.clave.value;
    const emailValue = frm.email.value;

    var test = /^[a-zA-Z]+$/;
    if (!test.test(usuarioValue)) {
      window.event.preventDefault();
      alert("Ingrese el usuario");
      return;
    }

    if (claveValue.length < 6) {
        window.event.preventDefault();
      alert("La clave tiene que ser más de 6 caracteres");
      return;
    }

    var test2 = /^[a-zA-Z0-9]{6,10}$/;
    if (test2.test(claveValue)) {
        window.event.preventDefault();
      alert("Ingrese una clave");
      return;
    }

    var test3 = /^([a-zA-Z0-9])+[@]([a-z])+[.][a-z]{2,3}$/;
    if (!test3.test(emailValue)) {
        window.event.preventDefault();
      alert("Formato de correo incorrecto");
      return;
    }

    console.log("Usuario:", usuarioValue);
    console.log("Clave:", claveValue);
    console.log("Email:", emailValue);

    
  }










/*Variables globales */
var diasemana = new Array("Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab");
var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre");




    function calendario(){
        var fecha = new Date();
        var dia = fecha.getDate();
        var mes = fecha.getMonth();
        var year = fecha.getFullYear();
        var x = meses[mes];
    
        var ndias =(new Date(fecha.getFullYear(), fecha.getMonth()+1,0).getDate());
        var dsemana=(new Date(fecha.getFullYear(), fecha.getMonth(), 1).getDay());
    
        var dias=new Array();
    
        for(let i=0; i<dsemana; i++){dias.push("");}
        for(let i=1; i<=ndias; i++){dias.push(i);}
    
        var tabla=document.createElement("table");
        document.getElementById("calendario").appendChild(tabla);
    
        var fila=document.createElement("tr");
        tabla.appendChild(fila);
    
        diasemana.forEach(function(d){
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
    
       

        document.getElementById("h1Calendario").innerHTML="Calendario: "+year;
        document.getElementById("mes").innerHTML=""+x;

    }

    calendario()
