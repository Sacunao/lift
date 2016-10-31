$(document).ready(function() {
	$("#inputNumero").keydown(validandoTeclas);
	$("#inputNumero").keyup(longitud);
	$("#nextstep").click(creandoCodigo);
	$("#nextstep2").click(validandoCodigo);
	$("#nextstep3").click(validandoForm);
	$(".codenumber").keydown(validandoTeclas);
	$(".codenumber").keyup(asignandoFocus);
	$(".resend").click(reenviarCodigo);
    $("#contacto").click(mostrandoPanel);
    $("#panelUsuario").click(ocultandoPanel);

	function validandoTeclas(evento){
		var ascii = evento.keyCode;
		if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
			return true;
		} else {
			return false;
		}
	}

	function longitud(evento){
		var longitud = $(this).val().length;
		if (longitud == 9) {
			$("#nextstep").attr("href", "signupdos.html");
			var movil =  $("#inputNumero").val();
			localStorage.setItem("numeroMovil", movil);
		} else if ((longitud > 9)){
			$("#nextstep").removeAttr("href");
			sweetAlert("Error...", "ingrese nùmero válido de 9 dígitos", "error");
		} else {
			$("#nextstep").removeAttr("href");
		}
	}

	var movilNumber = localStorage.getItem("numeroMovil");
	$("#movil").text(movilNumber);

	function creandoCodigo(e){
		var numero = $("#inputNumero").val().length;
		var numeroRandom = Math.round(Math.random()*900) + 99;
		if(numero == 9){
			alert("LAB - " + numeroRandom);
			$(this).attr("href", "signupdos.html");	
		}

		localStorage.setItem("codigo",numeroRandom);
	}

	var codigoEntregado = localStorage.getItem("codigo");

	function validandoCodigo(e){
  		var codeInputs = $(".codenumber").eq(0).val() + $(".codenumber").eq(1).val() + $(".codenumber").eq(2).val();
  		if (codeInputs == codigoEntregado){
  			$(this).attr("href", "signuptres.html");	
  		} else if (codeInputs != codigoEntregado) {
  			sweetAlert("Error...", "El código ingresado incompleto o incorrecto.", "error");
  		} 
  	}

  	function validandoForm(e){
 		var checkbox = $("#checkbox");
  		if(validarInputs()){
  			$("#nextstep3").attr("href", "mapa.html");
  		}
  	}
	
	function validarInputs(e) {
		var nombre = $("#nombre").val();
		var apellido = $("#apellido").val();
		var email = $("#email").val();
		var checkbox = $("#checkbox");
        localStorage.setItem("userName", nombre);
		localStorage.setItem("userLastName",apellido);
		var valor = true;

		var regexNombre = /^[a-zñáéíóúü]+$/gi;
        if (!regexNombre.test(nombre)) {
            alert("Ingresa un nombre válido");
            valor = false;
        }

        var regexApellido = /^[a-zñáéíóúü]+$/gi;
        if (!regexApellido.test(apellido)) {
            alert("Ingresa un apellido válido");
            valor = false;
        }
		
	  	var regexEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!regexEmail.test(email)){
			alert("ingrese un correo válido");
			valor = false;
		} 

		if(!checkbox.is(":checked")){
  			alert("Acepta los terminos");
  			valor = false;
  		} 
		return valor;
		
		
	}

	var nombreUsuario = localStorage.getItem("userName");
	var apellidoUsario = localStorage.getItem("userLastName");
	var concatName = nombreUsuario + " " + apellidoUsario;
	$("#usuarioPanel").text(concatName);
	$("#nameUser").text(concatName);

	function asignandoFocus(e){
	  var llave = e.keyCode;
      if($(this).val().length == $(this).attr("maxlength")){
          $(this).next().focus();
      } else if(llave == 8){
      	  $(this).prev().focus();
      }
  	}

  	function reenviarCodigo(e){
  		swal("Por si lo olvidaste", codigoEntregado, "success");
  	}

  	function mostrandoPanel(){
  		$("#panelUsuario").remove("d-none").toggle("slow");
     }
    function ocultandoPanel(){
    	$("#panelUsuario").addClass("d-none").toggle("slow");
    }
});


