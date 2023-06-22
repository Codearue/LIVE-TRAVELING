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