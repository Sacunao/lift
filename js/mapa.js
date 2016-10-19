$(document).ready(function(e){
     {
    if (navigator.geolocation) { 
        // también se puede usar if ("geolocation" in navigator) {}
        navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
    }
};

    function funcionExito(posicion) {
        var lat = posicion.coords.latitude;
        var lon = posicion.coords.longitude;
        var latlon = new google.maps.LatLng(lat, lon)
        var mapa = document.getElementById('mapa')
        mapa.style.height = '250px';
        mapa.style.width = '500px';

        var myOptions = {
            center:latlon,zoom:14,
            mapTypeId:google.maps.MapTypeId.ROADMAP,
            mapTypeControl:false,
            navigationControlOptions:{
                style: google.maps.NavigationControlStyle.SMALL
            }
        };
        
        var map = new google.maps.Map(document.getElementById('mapa'), myOptions);

        var marker = new google.maps.Marker({
            position:latlon,
            map:map,
            title:"You are here!"
        });
    };

    function funcionError  (error) {
        console.log(error);
    };



});