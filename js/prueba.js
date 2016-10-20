$(document).ready(function(e){
    if (navigator.geolocation) { 
        navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
    }

  	function funcionExito(posicion) {
    var lat = posicion.coords.latitude;
    var lon = posicion.coords.longitude;
    var maps = new GMaps({
          div: "#mapa",
          lat: lat ,
          lng: lon ,
          mapTypeControl: false,
          zoomControl: false,
          streetViewControl: false
        });

        maps.addMarker({
          lat: lat ,
          lng: lon ,
          title: "Lima",
          click: function(e) {
            alert("Estas aquí");
          }
        });
    }

    function funcionError(error) {
        sweetAlert("Error...", "Usted tiene que aceptar la solicitud de ubicación.", "error");
        /*alert("Error: Usted tiene que aceptar la solicitud de ubicación");*/
    }
});
