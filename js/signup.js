$(document).ready(function() {
	$("#inputNumero").keydown(validandoTeclas);
	$("#inputNumero").keyup(longitud);
	$("#nextstep").click(creandoCodigo);

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
		} else if ((longitud > 9)){
			$("#nextstep").removeAttr("href");
			sweetAlert("Error...", "ingrese nùmero válido de 9 dígitos", "error");
		} else {
			$("#nextstep").removeAttr("href");
		}
	}

	function creandoCodigo(e){
		var numero = $("#inputNumero").val().length;
		var numeroRandom = Math.round(Math.random()*900) + 99;
		if(numero == 9){
			alert("LAB - " + numeroRandom);
			$("#nextstep").attr("href", "signupdos.html");
		}
	}

});


