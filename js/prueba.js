function validateForm(){
	/* Escribe tú código aquí */
	var nombre = document.getElementById("name");
	var apellido = document.getElementById("lastname");
	var correo = document.getElementById("input-email");
	var contra = document.getElementById("input-password");
	var tipoBici = document.getElementById("tipo-bici");

	// Campos obligatorios
	if (nombre.value.trim().length == 0 ||
		apellido.value.trim().length == 0 ||
		correo.value.trim().length == 0 ||
		contra.value.trim().length == 0 ||
		tipoBici.value == 0) {
		alert("Ingrese todos los campos obligatorios");
	}

	// A-Z para nombres y apellidos
	var regexNombre = /^[a-zñáéíóúü]+$/gi;
	if (!regexNombre.test(nombre.value)) {
		alert("Ingresa un nombre válido");
	}

	var regexApellido = /^[a-zñáéíóúü]+$/gi;
	if (!regexApellido.test(apellido.value)) {
		alert("Ingresa un apellido válido");
	}


	// Primera letra mayúscula para los campos nombres y apellidos
	if (nombre.value[0] == nombre.value[0].toLowerCase()) {
		alert("Ingrese la primera letra del nombre en mayúscula");
	}
	if (apellido.value[0] == apellido.value[0].toLowerCase()) {
		alert("Ingrese la primera letra del apellido en mayúscula");
	}

	// Formato de Correo
	var regexCorreo = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	if (!regexCorreo.test(correo.value)) {
		alert("Ingresa un correo válido");
	}

	// Password de al menos 6 caracteres
	if (contra.value.length < 6) {
		alert("Ingresa un password decente ¬¬");
	}

	// Password no igual a "password", "123456", "098754"
	if (contra.value == "password" || contra.value == "123456" || contra.value == "098754") {
		alert("Ingresa un password decente ¬¬!");
	}

	// El valor seleccionado de bicis, debe ser una de las opciones presentadas
	if (tipoBici.value != "urbana" && tipoBici.value != "treking" && tipoBici.value != "electrica" && tipoBici.value != "estatica") {
		alert("Escoge bien el tipo de bici oe!");
	}

}