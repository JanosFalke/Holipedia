// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 46.147,
            lng: -1.154
        },
        zoom: 15
    });


    let infoWindow = new google.maps.InfoWindow({
        map: map
    });



    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            let pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    }
    if (navigator.geolocation) { //Checks if browser supports geolocation
        navigator.geolocation.getCurrentPosition(function (pos) { //This gets the
            let latitude = pos.coords.latitude; //users current
            let longitude = pos.coords.longitude; //location
            let coords = new google.maps.LatLng(latitude, longitude); //Creates variable for map coordinates
            let directionsService = new google.maps.DirectionsService();
            let directionsDisplay = new google.maps.DirectionsRenderer();
            let mapOptions = //Sets map options
                {
                    zoom: 15, //Sets zoom level (0-21)
                    center: coords, //zoom in on users location
                    mapTypeControl: true, //allows you to select map type eg. map or satellite
                    navigationControlOptions: {
                        style: google.maps.NavigationControlStyle.SMALL //sets map controls size eg. zoom
                    },
                    mapTypeId: google.maps.MapTypeId.ROADMAP //sets type of map Options:ROADMAP, SATELLITE, HYBRID, TERRIAN
                };
            map = new google.maps.Map( /*creates Map variable*/ document.getElementById("map"), mapOptions /*Creates a new map using the passed optional parameters in the mapOptions parameter.*/ );
            directionsDisplay.setMap(map);
            directionsDisplay.setPanel(document.getElementById('panel'));
            let request = {
                origin: coords,
                destination: 'university of la rochelle',
                travelMode: google.maps.DirectionsTravelMode.DRIVING
            };

            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }
            });
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');

}
