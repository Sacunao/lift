var cargarPagina = function() {
  if (navigator.geolocation) { 
    navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
  }
};

var funcionExito = function(posicion) {
  var lat = posicion.coords.latitude;
  var lon = posicion.coords.longitude;
  var latLong = new google.maps.LatLng(lat, lon);
  $("#mapa").addClass("mapa");
    var myOptions = {
      center: latLong,zoom:14,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      navigationControlOptions:{
        style: google.maps.NavigationControlStyle.SMALL
      }
    };
    
    var map = new google.maps.Map(document.getElementById('mapa'), myOptions);
    var marker = new google.maps.Marker({
      position: latLong,
      map: map,
      title:"Tú estas aquí!"
    });

    var direccion = "";
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({"latLng": latLong}, function(results, status){
      if (status == google.maps.GeocoderStatus.OK){
        if (results[0])
        {
          direccion = results[0].formatted_address;
        }
        else
        {
          direccion = "No se encontro ninguna dirección";
        }
      }
      $("#direccion").val(direccion);
    });
};

var funcionError = function (error) {
  sweetAlert("Error...", "Usted no ha aceptado la solicitud de ubicación", "error");
};

$(document).ready(cargarPagina);