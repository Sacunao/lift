$(document).ready(function() {
	$("#inputNumero").keydown(validandoTeclas);
	$("#inputNumero").keyup(longitud);
	$("#nextstep").click(creandoCodigo);
	$("#nextstep3").click(validandoForm);
	$(".codenumber").keydown(validandoTeclas);
	$(".codenumber").keyup(asignandoFocus);
	$(".resend").click(reenviarCodigo);
	$("#nextstep2").click(validandoCodigo);

	
	function validandoForm(e) {
		e.preventDefault();
		var nombre = $("#nombre").val();
		var apellido = $("#apellido").val();
		var email = $("#email").val();
		var checkbox = $("#checkbox");

		var regexNombre = /^[a-zñáéíóúü]+$/gi;
        if (!regexNombre.test(nombre)) {
            alert("Ingresa un nombre válido");
        }

        var regexApellido = /^[a-zñáéíóúü]+$/gi;
        if (!regexApellido.test(apellido)) {
            alert("Ingresa un apellido válido");
        }
		
	  	var regexEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!regexEmail.test(email)){
			alert("ingrese un correo válido");
			// sweetAlert("Error...", "ingrese un correo válido", "error");
		} 

		// if (!checkbox.is(":checked")){
	 //        alert("Acepta los terminos");
		// } else {
		// 	$("#nextstep3").attr("href", "signup.html");
		// }

	}

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

  	function validandoCodigo(e){
  		var codeInputs = $(".codenumber").eq(0).val() + $(".codenumber").eq(1).val() + $(".codenumber").eq(2).val();
  		if (codeInputs == codigoEntregado){
  			$(this).attr("href", "signuptres.html");	
  		} else if (codeInputs != codigoEntregado) {
  			sweetAlert("Error...", "El código ingresado incompleto o incorrecto.", "error");
  		} 
  	}

});


