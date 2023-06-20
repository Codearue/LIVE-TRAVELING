function aumentar(e) {
    e.style.width = '320px';
    e.style.height = '320px';
  }
  
  function reducir(e) {
    e.style.width = '220px';
    e.style.height = '220px';  
  }
  
  for (element of document.getElementsByClassName("imgRounded")) {
    element.setAttribute("onmouseover", "aumentar(this)");
    element.setAttribute("onmouseout", "reducir(this)");
  }