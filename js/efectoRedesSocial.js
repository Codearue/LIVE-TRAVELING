
        function cambio(e){
            var img=e.getAttribute("data-ar");
            e.src="../imagenes/"+"globales/"+img+"1"+".jpg";
        }
        
        function regresa(e){
            var img=e.getAttribute("data-ar");
            e.src="../imagenes/"+"globales/"+img+".jpg";
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

