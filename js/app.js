window.onload = function(){ //Acciones tras cargar la página

  var numero = 0;var numeros = document.querySelectorAll("img");


  for (var i = 0; i < numeros.length; i++) {
      numeros[i].onclick = add;
    }

  function add(e) {
    e.stopPropagation()
    //alert(this.getAttribute("alt"));
    var pantalla = document.getElementById("display");
    var add_digito = pantalla;
    numero = e.innerHTML;
    add_digito.textContent += this.getAttribute("alt");

    document.getElementById('igual').onclick = function(){
      var resultado=eval(display.innerHTML);
      display.innerHTML=resultado;
    }

      document.getElementById("on").onclick = function(){
       display.innerHTML = "";
      }
  }
}
