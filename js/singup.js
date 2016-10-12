// Funcionalidades para Lyft

// - Validar que solo se ingresen #s
// - Validar que sean 9 #s como max.
// - Generar un código aleatorio con la estructura LAB-XYZ
// - Validar lo obvio

$(document).ready(function() {
	$("#inputNumero").keydown(validandoTeclas);
	$("#inputNumero").keyup(longitud);

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
			$("#nextstep").attr("href", "singupdos.html");
			
		} else if ((longitud > 9)){
			$("#nextstep").removeAttr("href");
			sweetAlert("Error...", "ingrese nùmero de 9 dígitos", "error");
		} else {
			$("#nextstep").removeAttr("href");
		}
	}
});


