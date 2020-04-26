/****************************************************************************/
/*****************************FRENCH LANGUAGE********************************/
/****************************************************************************/

function mapDestinations() {

    /*INIT MAP*/
    let map = new google.maps.Map(document.getElementById('carteDestinations'), {
        center: {
            lat: 40,
            lng: -30
        },
        zoom: 3,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false
    });

    /*INIT MARKERS*/
    let markerLondres = new google.maps.Marker({
        position: {
            lat: 51.5085300,
            lng: -0.1257400
        },
        map: map,
        title: 'Londres'
    });

    let markerManchester = new google.maps.Marker({
        position: {
            lat: 53.48095,
            lng: -2.23743
        },
        map: map,
        title: 'Manchester'
    });

    let markerLiverpool = new google.maps.Marker({
        position: {
            lat: 53.41058,
            lng: -2.9779
        },
        map: map,
        title: 'Liverpool'
    });

    let markerNewYork = new google.maps.Marker({
        position: {
            lat: 40.7808,
            lng: -73.9772
        },
        map: map,
        title: 'New York'
    });

    let markerLasVegas = new google.maps.Marker({
        position: {
            lat: 36.114647,
            lng: -115.172813
        },
        map: map,
        title: 'Las Vegas'
    });

    let markerWashington = new google.maps.Marker({
        position: {
            lat: 38.889931,
            lng: -77.009003
        },
        map: map,
        title: 'Washington DC'
    });

    let markerVancouver = new google.maps.Marker({
        position: {
            lat: 49.246292,
            lng: -123.11622
        },
        map: map,
        title: 'Vancouver'
    });

    let markerMontreal = new google.maps.Marker({
        position: {
            lat: 45.5087,
            lng: -73.554
        },
        map: map,
        title: 'Montreal'
    });

    let markerParis = new google.maps.Marker({
        position: {
            lat: 48.8534100,
            lng: 2.348800
        },
        map: map,
        title: 'Paris'
    });

    let markerLaRochelle = new google.maps.Marker({
        position: {
            lat: 46.1666700,
            lng: -1.1500000
        },
        map: map,
        title: 'La Rochelle'
    });

    let markerStrasbourg = new google.maps.Marker({
        position: {
            lat: 48.5839200,
            lng: 7.7455300
        },
        map: map,
        title: 'Strasbourg'
    });

    let markerBerlin = new google.maps.Marker({
        position: {
            lat: 52.5243700,
            lng: 13.4105300
        },
        map: map,
        title: 'Berlin'
    });

    let markerHalleWestfalen = new google.maps.Marker({
        position: {
            lat: 52.0452,
            lng: 8.326
        },
        map: map,
        title: 'Halle Westfalen'
    });

    let markerMunich = new google.maps.Marker({
        position: {
            lat: 48.137154,
            lng: 11.5761
        },
        map: map,
        title: 'Munich'
    });

    let markerRome = new google.maps.Marker({
        position: {
            lat: 41.8919300,
            lng: 12.5113300
        },
        map: map,
        title: 'Rome'
    });

    let markerVenise = new google.maps.Marker({
        position: {
            lat: 45.4371300,
            lng: 12.3326500
        },
        map: map,
        title: 'Venise'
    });

    let markerMilan = new google.maps.Marker({
        position: {
            lat: 45.464,
            lng: 9.189
        },
        map: map,
        title: 'Milan'
    });

    let markerMoscou = new google.maps.Marker({
        position: {
            lat: 55.7522200,
            lng: 37.6155600
        },
        map: map,
        title: 'Moscou'
    });

    let markerStPetersbourg = new google.maps.Marker({
        position: {
            lat: 59.9386300,
            lng: 30.3141300
        },
        map: map,
        title: 'St. Petersbourg'
    });

    let markerStockholm = new google.maps.Marker({
        position: {
            lat: 59.334591,
            lng: 18.063240
        },
        map: map,
        title: 'Stockholm'
    });


    /*INIT CONTENT OF INFO WINDOWS*/
    let infowindowLondres = new google.maps.InfoWindow({
        content: '<a href="../html/villes/londres.html">Londres</a>'
    });
    let infowindowManchester = new google.maps.InfoWindow({
        content: '<a href="../html/villes/manchester.html">Manchester</a>'
    });
    let infowindowLiverpool = new google.maps.InfoWindow({
        content: '<a href="../html/villes/liverpool.html">Liverpool</a>'
    });
    let infowindowNewYork = new google.maps.InfoWindow({
        content: '<a href="../html/villes/newyork.html">New York</a>'
    });
    let infowindowLasVegas = new google.maps.InfoWindow({
        content: '<a href="../html/villes/lasvegas.html">Las Vegas</a>'
    });
    let infowindowWashington = new google.maps.InfoWindow({
        content: '<a href="../html/villes/washington.html">Washington D.C.</a>'
    });
    let infowindowVancouver = new google.maps.InfoWindow({
        content: '<a href="../html/villes/vancouver.html">Vancouver</a>'
    });
    let infowindowMontreal = new google.maps.InfoWindow({
        content: '<a href="../html/villes/montreal.html">Montreal</a>'
    });
    let infowindowParis = new google.maps.InfoWindow({
        content: '<a href="../html/villes/paris.html">Paris</a>'
    });
    let infowindowLaRochelle = new google.maps.InfoWindow({
        content: '<a href="../html/villes/larochelle.html">La Rochelle</a>'
    });
    let infowindowStrasbourg = new google.maps.InfoWindow({
        content: '<a href="../html/villes/strasbourg.html">Strasbourg</a>'
    });
    let infowindowBerlin = new google.maps.InfoWindow({
        content: '<a href="../html/villes/berlin.html">Berlin</a>'
    });
    let infowindowHalleWestfalen = new google.maps.InfoWindow({
        content: '<a href="../html/villes/halle.html">Halle Westfalen</a>'
    });
    let infowindowMunich = new google.maps.InfoWindow({
        content: '<a href="../html/villes/munich.html">Munich</a>'
    });
    let infowindowRome = new google.maps.InfoWindow({
        content: '<a href="../html/villes/rome.html">Rome</a>'
    });
    let infowindowVenise = new google.maps.InfoWindow({
        content: '<a href="../html/villes/venise.html">Venise</a>',
    });
    let infowindowMilan = new google.maps.InfoWindow({
        content: '<a href="../html/villes/milan.html">Milan</a>'
    });
    let infowindowMoscou = new google.maps.InfoWindow({
        content: '<a href="../html/villes/moscou.html">Moscou</a>'
    });
    let infowindowStPetersbourg = new google.maps.InfoWindow({
        content: '<a href="../html/villes/stpetersbourg.html">St. Petersbourg</a>'
    });
    let infowindowStockholm = new google.maps.InfoWindow({
        content: '<a href="../html/villes/stockholm.html">Stockholm</a>'
    });



    /*ON CLICK --> CLOSE AND OPEN OF INFO WINDOWS*/
    markerLondres.addListener('click', function () {
        infowindowLondres.open(map, markerLondres);
    });

    markerManchester.addListener('click', function () {
        infowindowManchester.open(map, markerManchester);
    });

    markerLiverpool.addListener('click', function () {
        infowindowLiverpool.open(map, markerLiverpool);
    });

    /*ON CLICK --> CLOSE AND OPEN OF INFO WINDOWS*/
    markerNewYork.addListener('click', function () {
        infowindowNewYork.open(map, markerNewYork);
    });

    markerLasVegas.addListener('click', function () {
        infowindowLasVegas.open(map, markerLasVegas);
    });

    markerWashington.addListener('click', function () {
        infowindowWashington.open(map, markerWashington);
    });

    markerVancouver.addListener('click', function () {
        infowindowVancouver.open(map, markerVancouver);
    });

    markerMontreal.addListener('click', function () {
        infowindowMontreal.open(map, markerMontreal);
    });

    markerParis.addListener('click', function () {
        infowindowParis.open(map, markerParis);
    });

    markerLaRochelle.addListener('click', function () {
        infowindowLaRochelle.open(map, markerLaRochelle);
    });

    markerStrasbourg.addListener('click', function () {
        infowindowStrasbourg.open(map, markerStrasbourg);
    });

    markerBerlin.addListener('click', function () {
        infowindowBerlin.open(map, markerBerlin);
    });

    markerHalleWestfalen.addListener('click', function () {
        infowindowHalleWestfalen.open(map, markerHalleWestfalen);
    });

    markerMunich.addListener('click', function () {
        infowindowMunich.open(map, markerMunich);
    });

    markerRome.addListener('click', function () {
        infowindowRome.open(map, markerRome);
    });

    markerVenise.addListener('click', function () {
        infowindowVenise.open(map, markerVenise);
    });

    markerMilan.addListener('click', function () {
        infowindowMilan.open(map, markerMilan);
    });

    markerMoscou.addListener('click', function () {
        infowindowMoscou.open(map, markerMoscou);
    });

    markerStPetersbourg.addListener('click', function () {
        infowindowStPetersbourg.open(map, markerStPetersbourg);
    });

    markerStockholm.addListener('click', function () {
        infowindowStockholm.open(map, markerStockholm);
    });

    //SEULEMENT MARCHE AVEC UN PORTABLE ET NE PAS AVEC RETRECIR LECRAN PC (QUELQUES PROBLEMES POUR RESIZE SI ON AGRADIT LA FENETRE)
    //SEULEMENT MARCHE SI ON RECHARGER LE SITE (POUR MOBILE ET PC)
    if (window.matchMedia("(max-width: 800px)").matches) {
        let center = map.getCenter();
        map.setCenter(center);
        map.setZoom(1);
    }

}




/****************************************************************************/
/*****************************GERMAN LANGUAGE********************************/
/****************************************************************************/


function mapDestinationsDE() {

    /*INIT MAP*/
    let map = new google.maps.Map(document.getElementById('carteDestinations'), {
        center: {
            lat: 40,
            lng: -30
        },
        zoom: 3,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false
    });

    /*INIT MARKERS*/
    let markerLondres = new google.maps.Marker({
        position: {
            lat: 51.5085300,
            lng: -0.1257400
        },
        map: map,
        title: 'Londres'
    });

    let markerManchester = new google.maps.Marker({
        position: {
            lat: 53.48095,
            lng: -2.23743
        },
        map: map,
        title: 'Manchester'
    });

    let markerLiverpool = new google.maps.Marker({
        position: {
            lat: 53.41058,
            lng: -2.9779
        },
        map: map,
        title: 'Liverpool'
    });

    let markerNewYork = new google.maps.Marker({
        position: {
            lat: 40.7808,
            lng: -73.9772
        },
        map: map,
        title: 'New York'
    });

    let markerLasVegas = new google.maps.Marker({
        position: {
            lat: 36.114647,
            lng: -115.172813
        },
        map: map,
        title: 'Las Vegas'
    });

    let markerWashington = new google.maps.Marker({
        position: {
            lat: 38.889931,
            lng: -77.009003
        },
        map: map,
        title: 'Washington DC'
    });

    let markerVancouver = new google.maps.Marker({
        position: {
            lat: 49.246292,
            lng: -123.11622
        },
        map: map,
        title: 'Vancouver'
    });

    let markerMontreal = new google.maps.Marker({
        position: {
            lat: 45.5087,
            lng: -73.554
        },
        map: map,
        title: 'Montreal'
    });

    let markerParis = new google.maps.Marker({
        position: {
            lat: 48.8534100,
            lng: 2.348800
        },
        map: map,
        title: 'Paris'
    });

    let markerLaRochelle = new google.maps.Marker({
        position: {
            lat: 46.1666700,
            lng: -1.1500000
        },
        map: map,
        title: 'La Rochelle'
    });

    let markerStrasbourg = new google.maps.Marker({
        position: {
            lat: 48.5839200,
            lng: 7.7455300
        },
        map: map,
        title: 'Strasbourg'
    });

    let markerBerlin = new google.maps.Marker({
        position: {
            lat: 52.5243700,
            lng: 13.4105300
        },
        map: map,
        title: 'Berlin'
    });

    let markerHalleWestfalen = new google.maps.Marker({
        position: {
            lat: 52.0452,
            lng: 8.326
        },
        map: map,
        title: 'Halle Westfalen'
    });

    let markerMunich = new google.maps.Marker({
        position: {
            lat: 48.137154,
            lng: 11.5761
        },
        map: map,
        title: 'Munich'
    });

    let markerRome = new google.maps.Marker({
        position: {
            lat: 41.8919300,
            lng: 12.5113300
        },
        map: map,
        title: 'Rome'
    });

    let markerVenise = new google.maps.Marker({
        position: {
            lat: 45.4371300,
            lng: 12.3326500
        },
        map: map,
        title: 'Venise'
    });

    let markerMilan = new google.maps.Marker({
        position: {
            lat: 45.464,
            lng: 9.189
        },
        map: map,
        title: 'Milan'
    });

    let markerMoscou = new google.maps.Marker({
        position: {
            lat: 55.7522200,
            lng: 37.6155600
        },
        map: map,
        title: 'Moscou'
    });

    let markerStPetersbourg = new google.maps.Marker({
        position: {
            lat: 59.9386300,
            lng: 30.3141300
        },
        map: map,
        title: 'St. Petersbourg'
    });

    let markerStockholm = new google.maps.Marker({
        position: {
            lat: 59.334591,
            lng: 18.063240
        },
        map: map,
        title: 'Stockholm'
    });


    /*INIT CONTENT OF INFO WINDOWS*/
    let infowindowLondres = new google.maps.InfoWindow({
        content: '<a href="cities/london.html">London</a>'
    });
    let infowindowManchester = new google.maps.InfoWindow({
        content: '<a href="cities/manchester.html">Manchester</a>'
    });
    let infowindowLiverpool = new google.maps.InfoWindow({
        content: '<a href="cities/liverpool.html">Liverpool</a>'
    });
    let infowindowNewYork = new google.maps.InfoWindow({
        content: '<a href="cities/newyork.html">New York</a>'
    });
    let infowindowLasVegas = new google.maps.InfoWindow({
        content: '<a href="cities/lasvegas.html">Las Vegas</a>'
    });
    let infowindowWashington = new google.maps.InfoWindow({
        content: '<a href="cities/washington.html">Washington D.C.</a>'
    });
    let infowindowVancouver = new google.maps.InfoWindow({
        content: '<a href="cities/vancouver.html">Vancouver</a>'
    });
    let infowindowMontreal = new google.maps.InfoWindow({
        content: '<a href="cities/montreal.html">Montreal</a>'
    });
    let infowindowParis = new google.maps.InfoWindow({
        content: '<a href="cities/paris.html">Paris</a>'
    });
    let infowindowLaRochelle = new google.maps.InfoWindow({
        content: '<a href="cities/larochelle.html">La Rochelle</a>'
    });
    let infowindowStrasbourg = new google.maps.InfoWindow({
        content: '<a href="cities/strasburg.html">Strasburg</a>'
    });
    let infowindowBerlin = new google.maps.InfoWindow({
        content: '<a href="cities/berlin.html">Berlin</a>'
    });
    let infowindowHalleWestfalen = new google.maps.InfoWindow({
        content: '<a href="cities/halle.html">Halle Westfalen</a>'
    });
    let infowindowMunich = new google.maps.InfoWindow({
        content: '<a href="cities/munchen.html">München</a>'
    });
    let infowindowRome = new google.maps.InfoWindow({
        content: '<a href="cities/rom.html">Rom</a>'
    });
    let infowindowVenise = new google.maps.InfoWindow({
        content: '<a href="cities/venedig.html">Venedig</a>',
    });
    let infowindowMilan = new google.maps.InfoWindow({
        content: '<a href="cities/mailand.html">Mailand</a>'
    });
    let infowindowMoscou = new google.maps.InfoWindow({
        content: '<a href="cities/moskau.html">Moskau</a>'
    });
    let infowindowStPetersbourg = new google.maps.InfoWindow({
        content: '<a href="cities/stpetersburg.html">St. Petersburg</a>'
    });
    let infowindowStockholm = new google.maps.InfoWindow({
        content: '<a href="cities/stockholm.html">Stockholm</a>'
    });



    /*ON CLICK --> CLOSE AND OPEN OF INFO WINDOWS*/
    markerLondres.addListener('click', function () {
        infowindowLondres.open(map, markerLondres);
    });

    markerManchester.addListener('click', function () {
        infowindowManchester.open(map, markerManchester);
    });

    markerLiverpool.addListener('click', function () {
        infowindowLiverpool.open(map, markerLiverpool);
    });

    /*ON CLICK --> CLOSE AND OPEN OF INFO WINDOWS*/
    markerNewYork.addListener('click', function () {
        infowindowNewYork.open(map, markerNewYork);
    });

    markerLasVegas.addListener('click', function () {
        infowindowLasVegas.open(map, markerLasVegas);
    });

    markerWashington.addListener('click', function () {
        infowindowWashington.open(map, markerWashington);
    });

    markerVancouver.addListener('click', function () {
        infowindowVancouver.open(map, markerVancouver);
    });

    markerMontreal.addListener('click', function () {
        infowindowMontreal.open(map, markerMontreal);
    });

    markerParis.addListener('click', function () {
        infowindowParis.open(map, markerParis);
    });

    markerLaRochelle.addListener('click', function () {
        infowindowLaRochelle.open(map, markerLaRochelle);
    });

    markerStrasbourg.addListener('click', function () {
        infowindowStrasbourg.open(map, markerStrasbourg);
    });

    markerBerlin.addListener('click', function () {
        infowindowBerlin.open(map, markerBerlin);
    });

    markerHalleWestfalen.addListener('click', function () {
        infowindowHalleWestfalen.open(map, markerHalleWestfalen);
    });

    markerMunich.addListener('click', function () {
        infowindowMunich.open(map, markerMunich);
    });

    markerRome.addListener('click', function () {
        infowindowRome.open(map, markerRome);
    });

    markerVenise.addListener('click', function () {
        infowindowVenise.open(map, markerVenise);
    });

    markerMilan.addListener('click', function () {
        infowindowMilan.open(map, markerMilan);
    });

    markerMoscou.addListener('click', function () {
        infowindowMoscou.open(map, markerMoscou);
    });

    markerStPetersbourg.addListener('click', function () {
        infowindowStPetersbourg.open(map, markerStPetersbourg);
    });

    markerStockholm.addListener('click', function () {
        infowindowStockholm.open(map, markerStockholm);
    });

    //SEULEMENT MARCHE AVEC UN PORTABLE ET NE PAS AVEC RETRECIR LECRAN PC (QUELQUES PROBLEMES POUR RESIZE SI ON AGRADIT LA FENETRE)
    //SEULEMENT MARCHE SI ON RECHARGER LE SITE (POUR MOBILE ET PC)
    if (window.matchMedia("(max-width: 800px)").matches) {
        let center = map.getCenter();
        map.setCenter(center);
        map.setZoom(1);
    }

}








/*****************************************************************************/
/*****************************ENGLISH LANGUAGE********************************/
/*****************************************************************************/


function mapDestinationsEN() {

    /*INIT MAP*/
    let map = new google.maps.Map(document.getElementById('carteDestinations'), {
        center: {
            lat: 40,
            lng: -30
        },
        zoom: 3,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false
    });

    /*INIT MARKERS*/
    let markerLondres = new google.maps.Marker({
        position: {
            lat: 51.5085300,
            lng: -0.1257400
        },
        map: map,
        title: 'Londres'
    });

    let markerManchester = new google.maps.Marker({
        position: {
            lat: 53.48095,
            lng: -2.23743
        },
        map: map,
        title: 'Manchester'
    });

    let markerLiverpool = new google.maps.Marker({
        position: {
            lat: 53.41058,
            lng: -2.9779
        },
        map: map,
        title: 'Liverpool'
    });

    let markerNewYork = new google.maps.Marker({
        position: {
            lat: 40.7808,
            lng: -73.9772
        },
        map: map,
        title: 'New York'
    });

    let markerLasVegas = new google.maps.Marker({
        position: {
            lat: 36.114647,
            lng: -115.172813
        },
        map: map,
        title: 'Las Vegas'
    });

    let markerWashington = new google.maps.Marker({
        position: {
            lat: 38.889931,
            lng: -77.009003
        },
        map: map,
        title: 'Washington DC'
    });

    let markerVancouver = new google.maps.Marker({
        position: {
            lat: 49.246292,
            lng: -123.11622
        },
        map: map,
        title: 'Vancouver'
    });

    let markerMontreal = new google.maps.Marker({
        position: {
            lat: 45.5087,
            lng: -73.554
        },
        map: map,
        title: 'Montreal'
    });

    let markerParis = new google.maps.Marker({
        position: {
            lat: 48.8534100,
            lng: 2.348800
        },
        map: map,
        title: 'Paris'
    });

    let markerLaRochelle = new google.maps.Marker({
        position: {
            lat: 46.1666700,
            lng: -1.1500000
        },
        map: map,
        title: 'La Rochelle'
    });

    let markerStrasbourg = new google.maps.Marker({
        position: {
            lat: 48.5839200,
            lng: 7.7455300
        },
        map: map,
        title: 'Strasbourg'
    });

    let markerBerlin = new google.maps.Marker({
        position: {
            lat: 52.5243700,
            lng: 13.4105300
        },
        map: map,
        title: 'Berlin'
    });

    let markerHalleWestfalen = new google.maps.Marker({
        position: {
            lat: 52.0452,
            lng: 8.326
        },
        map: map,
        title: 'Halle Westfalen'
    });

    let markerMunich = new google.maps.Marker({
        position: {
            lat: 48.137154,
            lng: 11.5761
        },
        map: map,
        title: 'Munich'
    });

    let markerRome = new google.maps.Marker({
        position: {
            lat: 41.8919300,
            lng: 12.5113300
        },
        map: map,
        title: 'Rome'
    });

    let markerVenise = new google.maps.Marker({
        position: {
            lat: 45.4371300,
            lng: 12.3326500
        },
        map: map,
        title: 'Venise'
    });

    let markerMilan = new google.maps.Marker({
        position: {
            lat: 45.464,
            lng: 9.189
        },
        map: map,
        title: 'Milan'
    });

    let markerMoscou = new google.maps.Marker({
        position: {
            lat: 55.7522200,
            lng: 37.6155600
        },
        map: map,
        title: 'Moscou'
    });

    let markerStPetersbourg = new google.maps.Marker({
        position: {
            lat: 59.9386300,
            lng: 30.3141300
        },
        map: map,
        title: 'St. Petersbourg'
    });

    let markerStockholm = new google.maps.Marker({
        position: {
            lat: 59.334591,
            lng: 18.063240
        },
        map: map,
        title: 'Stockholm'
    });


    /*INIT CONTENT OF INFO WINDOWS*/
    let infowindowLondres = new google.maps.InfoWindow({
        content: '<a href="cities/london.html">London</a>'
    });
    let infowindowManchester = new google.maps.InfoWindow({
        content: '<a href="cities/manchester.html">Manchester</a>'
    });
    let infowindowLiverpool = new google.maps.InfoWindow({
        content: '<a href="cities/liverpool.html">Liverpool</a>'
    });
    let infowindowNewYork = new google.maps.InfoWindow({
        content: '<a href="cities/newyork.html">New York</a>'
    });
    let infowindowLasVegas = new google.maps.InfoWindow({
        content: '<a href="cities/lasvegas.html">Las Vegas</a>'
    });
    let infowindowWashington = new google.maps.InfoWindow({
        content: '<a href="cities/washington.html">Washington D.C.</a>'
    });
    let infowindowVancouver = new google.maps.InfoWindow({
        content: '<a href="cities/vancouver.html">Vancouver</a>'
    });
    let infowindowMontreal = new google.maps.InfoWindow({
        content: '<a href="cities/montreal.html">Montreal</a>'
    });
    let infowindowParis = new google.maps.InfoWindow({
        content: '<a href="cities/paris.html">Paris</a>'
    });
    let infowindowLaRochelle = new google.maps.InfoWindow({
        content: '<a href="cities/larochelle.html">La Rochelle</a>'
    });
    let infowindowStrasbourg = new google.maps.InfoWindow({
        content: '<a href="cities/strasburg.html">Strasburg</a>'
    });
    let infowindowBerlin = new google.maps.InfoWindow({
        content: '<a href="cities/berlin.html">Berlin</a>'
    });
    let infowindowHalleWestfalen = new google.maps.InfoWindow({
        content: '<a href="cities/halle.html">Halle Westfalen</a>'
    });
    let infowindowMunich = new google.maps.InfoWindow({
        content: '<a href="cities/munich.html">Munich</a>'
    });
    let infowindowRome = new google.maps.InfoWindow({
        content: '<a href="cities/rome.html">Rome</a>'
    });
    let infowindowVenise = new google.maps.InfoWindow({
        content: '<a href="cities/venice.html">Venice</a>',
    });
    let infowindowMilan = new google.maps.InfoWindow({
        content: '<a href="cities/milan.html">Milan</a>'
    });
    let infowindowMoscou = new google.maps.InfoWindow({
        content: '<a href="cities/moscow.html">Moscow</a>'
    });
    let infowindowStPetersbourg = new google.maps.InfoWindow({
        content: '<a href="cities/stpetersburg.html">St. Petersburg</a>'
    });
    let infowindowStockholm = new google.maps.InfoWindow({
        content: '<a href="cities/stockholm.html">Stockholm</a>'
    });



    /*ON CLICK --> CLOSE AND OPEN OF INFO WINDOWS*/
    markerLondres.addListener('click', function () {
        infowindowLondres.open(map, markerLondres);
    });

    markerManchester.addListener('click', function () {
        infowindowManchester.open(map, markerManchester);
    });

    markerLiverpool.addListener('click', function () {
        infowindowLiverpool.open(map, markerLiverpool);
    });

    /*ON CLICK --> CLOSE AND OPEN OF INFO WINDOWS*/
    markerNewYork.addListener('click', function () {
        infowindowNewYork.open(map, markerNewYork);
    });

    markerLasVegas.addListener('click', function () {
        infowindowLasVegas.open(map, markerLasVegas);
    });

    markerWashington.addListener('click', function () {
        infowindowWashington.open(map, markerWashington);
    });

    markerVancouver.addListener('click', function () {
        infowindowVancouver.open(map, markerVancouver);
    });

    markerMontreal.addListener('click', function () {
        infowindowMontreal.open(map, markerMontreal);
    });

    markerParis.addListener('click', function () {
        infowindowParis.open(map, markerParis);
    });

    markerLaRochelle.addListener('click', function () {
        infowindowLaRochelle.open(map, markerLaRochelle);
    });

    markerStrasbourg.addListener('click', function () {
        infowindowStrasbourg.open(map, markerStrasbourg);
    });

    markerBerlin.addListener('click', function () {
        infowindowBerlin.open(map, markerBerlin);
    });

    markerHalleWestfalen.addListener('click', function () {
        infowindowHalleWestfalen.open(map, markerHalleWestfalen);
    });

    markerMunich.addListener('click', function () {
        infowindowMunich.open(map, markerMunich);
    });

    markerRome.addListener('click', function () {
        infowindowRome.open(map, markerRome);
    });

    markerVenise.addListener('click', function () {
        infowindowVenise.open(map, markerVenise);
    });

    markerMilan.addListener('click', function () {
        infowindowMilan.open(map, markerMilan);
    });

    markerMoscou.addListener('click', function () {
        infowindowMoscou.open(map, markerMoscou);
    });

    markerStPetersbourg.addListener('click', function () {
        infowindowStPetersbourg.open(map, markerStPetersbourg);
    });

    markerStockholm.addListener('click', function () {
        infowindowStockholm.open(map, markerStockholm);
    });

    //SEULEMENT MARCHE AVEC UN PORTABLE ET NE PAS AVEC RETRECIR LECRAN PC (QUELQUES PROBLEMES POUR RESIZE SI ON AGRADIT LA FENETRE)
    //SEULEMENT MARCHE SI ON RECHARGER LE SITE (POUR MOBILE ET PC)
    if (window.matchMedia("(max-width: 800px)").matches) {
        let center = map.getCenter();
        map.setCenter(center);
        map.setZoom(1);
    }


}
