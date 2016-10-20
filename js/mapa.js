$(document).ready(function(e){
    if (navigator.geolocation) { 
        navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
    }

    function funcionExito(posicion) {
    var lat = posicion.coords.latitude;
    var lon = posicion.coords.longitude;
    /*var maps = new GMaps({
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
        });*/
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
    }

    function funcionError(error) {
        sweetAlert("Error...", "Usted tiene que aceptar la solicitud de ubicación.", "error");
        /*alert("Error: Usted tiene que aceptar la solicitud de ubicación");*/
    }
 
});