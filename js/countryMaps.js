/****************************************************************************/
/*****************************FRENCH LANGUAGE********************************/
/****************************************************************************/


/************/
/***MAP USA**/
/************/

function mapUSA() {

    /*INIT MAP*/
    let map = new google.maps.Map(document.getElementById('carteCountry'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: {
            lat: 38,
            lng: -97
        },
        zoom: 5,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false
    });

    /*INIT MARKERS*/
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


    /*INIT CONTENT OF INFO WINDOWS*/
    let infowindowNewYork = new google.maps.InfoWindow({
        content: '<a href="#newYorkIci">New York</a>'
    });

    let infowindowLasVegas = new google.maps.InfoWindow({
        content: '<a href="#lasVegasIci">Las Vegas</a>'
    });
    let infowindowWashington = new google.maps.InfoWindow({
        content: '<a href="#washingtonIci">Washington DC.</a>'
    });

    /*OPEN INFO WINDOWS ON LOAD*/
    infowindowNewYork.open(map, markerNewYork);
    infowindowLasVegas.open(map, markerLasVegas);
    infowindowWashington.open(map, markerWashington);


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


    //SEULEMENT MARCHE AVEC UN PORTABLE ET NE PAS AVEC RETRECIR LECRAN PC (QUELQUES PROBLEMES POUR RESIZE SI ON AGRADIT LA FENETRE)
    //SEULEMENT MARCHE SI ON RECHARGER LE SITE (POUR MOBILE ET PC)
    if (window.matchMedia("(max-width: 800px)").matches) {
        let center = map.getCenter();
        map.setCenter(center);
        map.setZoom(2);
        infowindowNewYork.close();
        infowindowLasVegas.close();
        infowindowWashington.close();
    }
}


/***************/
/***MAP CANADA**/
/***************/

function mapCANADA() {

    /*INIT MAP*/
    let map = new google.maps.Map(document.getElementById('carteCountry'), {
        center: {
            lat: 53.639330776,
            lng: -95.37416517
        },
        zoom: 4,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false
    });

    /*INIT MARKERS*/
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


    /*INIT CONTENT OF INFO WINDOWS*/
    let infowindowVancouver = new google.maps.InfoWindow({
        content: '<a href="#vancouverIci">Vancouver</a>'
    });

    let infowindowMontreal = new google.maps.InfoWindow({
        content: '<a href="#montrealIci">Montreal</a>'
    });


    /*OPEN INFO WINDOWS ON LOAD*/
    infowindowVancouver.open(map, markerVancouver);
    infowindowMontreal.open(map, markerMontreal);


    /*ON CLICK --> CLOSE AND OPEN OF INFO WINDOWS*/
    markerVancouver.addListener('click', function () {
        infowindowVancouver.open(map, markerVancouver);
    });

    markerMontreal.addListener('click', function () {
        infowindowMontreal.open(map, markerMontreal);
    });

    //SEULEMENT MARCHE AVEC UN PORTABLE ET NE PAS AVEC RETRECIR LECRAN PC (QUELQUES PROBLEMES POUR RESIZE SI ON AGRADIT LA FENETRE)
    //SEULEMENT MARCHE SI ON RECHARGER LE SITE (POUR MOBILE ET PC)
    if (window.matchMedia("(max-width: 800px)").matches) {
        let center = map.getCenter();
        map.setCenter(center);
        map.setZoom(2);
        infowindowVancouver.close();
        infowindowMontreal.close();
    }

}


/************/
/*MAP FRANCE*/
/************/

function mapFRANCE() {

    /*INIT MAP*/
    let map = new google.maps.Map(document.getElementById('carteCountry'), {
        center: {
            lat: 46.8,
            lng: 2
        },
        zoom: 5,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false
    });

    /*INIT MARKERS*/
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

    /*INIT CONTENT OF INFO WINDOWS*/
    let infowindowParis = new google.maps.InfoWindow({
        content: '<a href="#parisIci">Paris</a>'
    });

    let infowindowLaRochelle = new google.maps.InfoWindow({
        content: '<a href="#larochelleIci">La Rochelle</a>'
    });
    let infowindowStrasbourg = new google.maps.InfoWindow({
        content: '<a href="#strasbourgIci">Strasbourg</a>'
    });

    /*OPEN INFO WINDOWS ON LOAD*/
    infowindowParis.open(map, markerParis);
    infowindowLaRochelle.open(map, markerLaRochelle);
    infowindowStrasbourg.open(map, markerStrasbourg);


    /*ON CLICK --> CLOSE AND OPEN OF INFO WINDOWS*/
    markerParis.addListener('click', function () {
        infowindowParis.open(map, markerParis);
    });

    markerLaRochelle.addListener('click', function () {
        infowindowLaRochelle.open(map, markerLaRochelle);
    });

    markerStrasbourg.addListener('click', function () {
        infowindowStrasbourg.open(map, markerStrasbourg);
    });

    //SEULEMENT MARCHE AVEC UN PORTABLE ET NE PAS AVEC RETRECIR LECRAN PC (QUELQUES PROBLEMES POUR RESIZE SI ON AGRADIT LA FENETRE)
    //SEULEMENT MARCHE SI ON RECHARGER LE SITE (POUR MOBILE ET PC)
    if (window.matchMedia("(max-width: 800px)").matches) {
        let center = map.getCenter();
        map.setCenter(center);
        map.setZoom(5);
        infowindowParis.close();
        infowindowLaRochelle.close();
        infowindowStrasbourg.close();
    }
}








/*************/
/*MAP GERMANY*/
/*************/

function mapGERMANY() {

    /*INIT MAP*/
    let map = new google.maps.Map(document.getElementById('carteCountry'), {
        center: {
            lat: 51.3,
            lng: 9
        },
        zoom: 6,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false
    });

    /*INIT MARKERS*/
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

    /*INIT CONTENT OF INFO WINDOWS*/
    let infowindowBerlin = new google.maps.InfoWindow({
        content: '<a href="#berlinIci">Berlin</a>'
    });

    let infowindowHalleWestfalen = new google.maps.InfoWindow({
        content: '<a href="#halleIci">Halle Westfalen</a>'
    });
    let infowindowMunich = new google.maps.InfoWindow({
        content: '<a href="#munichIci">Munich</a>'
    });

    /*OPEN INFO WINDOWS ON LOAD*/
    infowindowBerlin.open(map, markerBerlin);
    infowindowHalleWestfalen.open(map, markerHalleWestfalen);
    infowindowMunich.open(map, markerMunich);


    /*ON CLICK --> CLOSE AND OPEN OF INFO WINDOWS*/
    markerBerlin.addListener('click', function () {
        infowindowBerlin.open(map, markerBerlin);
    });

    markerHalleWestfalen.addListener('click', function () {
        infowindowHalleWestfalen.open(map, markerHalleWestfalen);
    });

    markerMunich.addListener('click', function () {
        infowindowMunich.open(map, markerMunich);
    });

    //SEULEMENT MARCHE AVEC UN PORTABLE ET NE PAS AVEC RETRECIR LECRAN PC (QUELQUES PROBLEMES POUR RESIZE SI ON AGRADIT LA FENETRE)
    //SEULEMENT MARCHE SI ON RECHARGER LE SITE (POUR MOBILE ET PC)
    if (window.matchMedia("(max-width: 800px)").matches) {
        let center = map.getCenter();
        map.setCenter(center);
        map.setZoom(5);
        infowindowBerlin.close();
        infowindowHalleWestfalen.close();
        infowindowMunich.close();
    }
}









/************/
/*MAP ITALY*/
/************/

function mapITALY() {

    /*INIT MAP*/
    let map = new google.maps.Map(document.getElementById('carteCountry'), {
        center: {
            lat: 42.5,
            lng: 13.3
        },
        zoom: 5,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false
    });

    /*INIT MARKERS*/
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

    /*INIT CONTENT OF INFO WINDOWS*/
    let infowindowRome = new google.maps.InfoWindow({
        content: '<a href="#romeIci">Rome</a>'
    });

    let infowindowVenise = new google.maps.InfoWindow({
        content: '<a href="#veniseIci">Venise</a>',
    });
    let infowindowMilan = new google.maps.InfoWindow({
        content: '<a href="#milanIci">Milan</a>'
    });

    infowindowRome.open(map, markerRome);
    infowindowVenise.open(map, markerVenise);
    infowindowMilan.open(map, markerMilan);

    /*ON CLICK --> CLOSE AND OPEN OF INFO WINDOWS*/
    markerRome.addListener('click', function () {
        infowindowRome.open(map, markerRome);
    });

    markerVenise.addListener('click', function () {
        infowindowVenise.open(map, markerVenise);
    });

    markerMilan.addListener('click', function () {
        infowindowMilan.open(map, markerMilan);
    });

    //SEULEMENT MARCHE AVEC UN PORTABLE ET NE PAS AVEC RETRECIR LECRAN PC (QUELQUES PROBLEMES POUR RESIZE SI ON AGRADIT LA FENETRE)
    //SEULEMENT MARCHE SI ON RECHARGER LE SITE (POUR MOBILE ET PC)
    if (window.matchMedia("(max-width: 800px)").matches) {
        let center = map.getCenter();
        map.setCenter(center);
        map.setZoom(4);
        infowindowRome.close();
        infowindowVenise.close();
        infowindowMilan.close();
    }
}









/************/
/*MAP RUSSIA*/
/************/

function mapRUSSIA() {

    /*INIT MAP*/
    let map = new google.maps.Map(document.getElementById('carteCountry'), {
        center: {
            lat: 60,
            lng: 59
        },
        zoom: 4,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false
    });

    /*INIT MARKERS*/
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


    /*INIT CONTENT OF INFO WINDOWS*/
    let infowindowMoscou = new google.maps.InfoWindow({
        content: '<a href="#moscouIci">Moscou</a>'
    });

    let infowindowStPetersbourg = new google.maps.InfoWindow({
        content: '<a href="#stPetersIci">St. Petersbourg</a>'
    });


    /*OPEN INFO WINDOWS ON LOAD*/
    infowindowMoscou.open(map, markerMoscou);
    infowindowStPetersbourg.open(map, markerStPetersbourg);


    /*ON CLICK --> CLOSE AND OPEN OF INFO WINDOWS*/
    markerMoscou.addListener('click', function () {
        infowindowMoscou.open(map, markerMoscou);
    });

    markerStPetersbourg.addListener('click', function () {
        infowindowStPetersbourg.open(map, markerStPetersbourg);
    });

    //SEULEMENT MARCHE AVEC UN PORTABLE ET NE PAS AVEC RETRECIR LECRAN PC (QUELQUES PROBLEMES POUR RESIZE SI ON AGRADIT LA FENETRE)
    //SEULEMENT MARCHE SI ON RECHARGER LE SITE (POUR MOBILE ET PC)
    if (window.matchMedia("(max-width: 800px)").matches) {
        let center = map.getCenter();
        map.setCenter(center);
        map.setZoom(2);
        infowindowMoscou.close();
        infowindowStPetersbourg.close();
    }
}









/************/
/*MAP SWEDEN*/
/************/

function mapSWEDEN() {

    /*INIT MAP*/
    let map = new google.maps.Map(document.getElementById('carteCountry'), {
        center: {
            lat: 60,
            lng: 15
        },
        zoom: 5,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false
    });

    /*INIT MARKERS*/
    let markerStockholm = new google.maps.Marker({
        position: {
            lat: 59.334591,
            lng: 18.063240
        },
        map: map,
        title: 'Stockholm'
    });


    /*INIT CONTENT OF INFO WINDOWS*/
    let infowindowStockholm = new google.maps.InfoWindow({
        content: '<a href="#stockholmIci">Stockholm</a>'
    });



    /*OPEN INFO WINDOWS ON LOAD*/
    infowindowStockholm.open(map, markerStockholm);



    /*ON CLICK --> CLOSE AND OPEN OF INFO WINDOWS*/
    markerStockholm.addListener('click', function () {
        infowindowStockholm.open(map, markerStockholm);
    });

    //SEULEMENT MARCHE AVEC UN PORTABLE ET NE PAS AVEC RETRECIR LECRAN PC (QUELQUES PROBLEMES POUR RESIZE SI ON AGRADIT LA FENETRE)
    //SEULEMENT MARCHE SI ON RECHARGER LE SITE (POUR MOBILE ET PC)
    if (window.matchMedia("(max-width: 800px)").matches) {
        let center = map.getCenter();
        map.setCenter(center);
        map.setZoom(4);
        infowindowStockholm.close();
    }

}








/*************/
/*MAP ENGLAND*/
/*************/

function mapENGLAND() {

    /*INIT MAP*/
    let map = new google.maps.Map(document.getElementById('carteCountry'), {
        center: {
            lat: 53,
            lng: -1.5
        },
        zoom: 6,
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

    /*INIT CONTENT OF INFO WINDOWS*/
    let infowindowLondres = new google.maps.InfoWindow({
        content: '<a href="#londonIci">Londres</a>'
    });

    let infowindowManchester = new google.maps.InfoWindow({
        content: '<a href="#manchesterIci">Manchester</a>'
    });
    let infowindowLiverpool = new google.maps.InfoWindow({
        content: '<a href="#liverpoolIci">Liverpool</a>'
    });

    /*OPEN INFO WINDOWS ON LOAD*/
    infowindowLondres.open(map, markerLondres);
    infowindowManchester.open(map, markerManchester);
    infowindowLiverpool.open(map, markerLiverpool);


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

    //SEULEMENT MARCHE AVEC UN PORTABLE ET NE PAS AVEC RETRECIR LECRAN PC (QUELQUES PROBLEMES POUR RESIZE SI ON AGRADIT LA FENETRE)
    //SEULEMENT MARCHE SI ON RECHARGER LE SITE (POUR MOBILE ET PC)
    if (window.matchMedia("(max-width: 800px)").matches) {
        let center = map.getCenter();
        map.setCenter(center);
        map.setZoom(5);
        infowindowLondres.close();
        infowindowManchester.close();
        infowindowLiverpool.close();
    }
}








/****************************************************************************/
/*****************************GERMAN LANGUAGE********************************/
/****************************************************************************/



/************/
/*MAP FRANCE*/
/************/

function mapFRANCEdeutsch() {

    /*INIT MAP*/
    let map = new google.maps.Map(document.getElementById('carteCountry'), {
        center: {
            lat: 46.8,
            lng: 2
        },
        zoom: 5,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false
    });

    /*INIT MARKERS*/
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
        title: 'Strasburg'
    });

    /*INIT CONTENT OF INFO WINDOWS*/
    let infowindowParis = new google.maps.InfoWindow({
        content: '<a href="#parisIci">Paris</a>'
    });

    let infowindowLaRochelle = new google.maps.InfoWindow({
        content: '<a href="#larochelleIci">La Rochelle</a>'
    });
    let infowindowStrasbourg = new google.maps.InfoWindow({
        content: '<a href="#strasbourgIci">Strasburg</a>'
    });

    /*OPEN INFO WINDOWS ON LOAD*/
    infowindowParis.open(map, markerParis);
    infowindowLaRochelle.open(map, markerLaRochelle);
    infowindowStrasbourg.open(map, markerStrasbourg);


    /*ON CLICK --> CLOSE AND OPEN OF INFO WINDOWS*/
    markerParis.addListener('click', function () {
        infowindowParis.open(map, markerParis);
    });

    markerLaRochelle.addListener('click', function () {
        infowindowLaRochelle.open(map, markerLaRochelle);
    });

    markerStrasbourg.addListener('click', function () {
        infowindowStrasbourg.open(map, markerStrasbourg);
    });

    //SEULEMENT MARCHE AVEC UN PORTABLE ET NE PAS AVEC RETRECIR LECRAN PC (QUELQUES PROBLEMES POUR RESIZE SI ON AGRADIT LA FENETRE)
    //SEULEMENT MARCHE SI ON RECHARGER LE SITE (POUR MOBILE ET PC)
    if (window.matchMedia("(max-width: 800px)").matches) {
        let center = map.getCenter();
        map.setCenter(center);
        map.setZoom(5);
        infowindowStrasbourg.close();
        infowindowParis.close();
        infowindowLaRochelle.close();
    }
}








/*************/
/*MAP GERMANY*/
/*************/

function mapGERMANYdeutsch() {

    /*INIT MAP*/
    let map = new google.maps.Map(document.getElementById('carteCountry'), {
        center: {
            lat: 51.3,
            lng: 9
        },
        zoom: 6,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false
    });

    /*INIT MARKERS*/
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

    /*INIT CONTENT OF INFO WINDOWS*/
    let infowindowBerlin = new google.maps.InfoWindow({
        content: '<a href="#berlinIci">Berlin</a>'
    });

    let infowindowHalleWestfalen = new google.maps.InfoWindow({
        content: '<a href="#halleIci">Halle Westfalen</a>'
    });
    let infowindowMunich = new google.maps.InfoWindow({
        content: '<a href="#munichIci">Munich</a>'
    });

    /*OPEN INFO WINDOWS ON LOAD*/
    infowindowBerlin.open(map, markerBerlin);
    infowindowHalleWestfalen.open(map, markerHalleWestfalen);
    infowindowMunich.open(map, markerMunich);


    /*ON CLICK --> CLOSE AND OPEN OF INFO WINDOWS*/
    markerBerlin.addListener('click', function () {
        infowindowBerlin.open(map, markerBerlin);
    });

    markerHalleWestfalen.addListener('click', function () {
        infowindowHalleWestfalen.open(map, markerHalleWestfalen);
    });

    markerMunich.addListener('click', function () {
        infowindowMunich.open(map, markerMunich);
    });

    //SEULEMENT MARCHE AVEC UN PORTABLE ET NE PAS AVEC RETRECIR LECRAN PC (QUELQUES PROBLEMES POUR RESIZE SI ON AGRADIT LA FENETRE)
    //SEULEMENT MARCHE SI ON RECHARGER LE SITE (POUR MOBILE ET PC)
    if (window.matchMedia("(max-width: 800px)").matches) {
        let center = map.getCenter();
        map.setCenter(center);
        map.setZoom(5);
        infowindowMunich.close();
        infowindowHalleWestfalen.close();
        infowindowBerlin.close();
    }
}







/************/
/*MAP ITALY*/
/************/

function mapITALYdeutsch() {

    /*INIT MAP*/
    let map = new google.maps.Map(document.getElementById('carteCountry'), {
        center: {
            lat: 42.5,
            lng: 13.3
        },
        zoom: 5,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false
    });

    /*INIT MARKERS*/
    let markerRome = new google.maps.Marker({
        position: {
            lat: 41.8919300,
            lng: 12.5113300
        },
        map: map,
        title: 'Rom'
    });

    let markerVenise = new google.maps.Marker({
        position: {
            lat: 45.4371300,
            lng: 12.3326500
        },
        map: map,
        title: 'Venedig'
    });

    let markerMailand = new google.maps.Marker({
        position: {
            lat: 45.464,
            lng: 9.189
        },
        map: map,
        title: 'Mailand'
    });

    /*INIT CONTENT OF INFO WINDOWS*/
    let infowindowRome = new google.maps.InfoWindow({
        content: '<a href="#romeIci">Rom</a>'
    });

    let infowindowVenise = new google.maps.InfoWindow({
        content: '<a href="#veniseIci">Venedig</a>',
    });
    let infowindowMailand = new google.maps.InfoWindow({
        content: '<a href="#milanIci">Mailand</a>'
    });

    infowindowRome.open(map, markerRome);
    infowindowVenise.open(map, markerVenise);
    infowindowMailand.open(map, markerMailand);

    /*ON CLICK --> CLOSE AND OPEN OF INFO WINDOWS*/
    markerRome.addListener('click', function () {
        infowindowRome.open(map, markerRome);
    });

    markerVenise.addListener('click', function () {
        infowindowVenise.open(map, markerVenise);
    });

    markerMailand.addListener('click', function () {
        infowindowMailand.open(map, markerMailand);
    });

    //SEULEMENT MARCHE AVEC UN PORTABLE ET NE PAS AVEC RETRECIR LECRAN PC (QUELQUES PROBLEMES POUR RESIZE SI ON AGRADIT LA FENETRE)
    //SEULEMENT MARCHE SI ON RECHARGER LE SITE (POUR MOBILE ET PC)
    if (window.matchMedia("(max-width: 800px)").matches) {
        let center = map.getCenter();
        map.setCenter(center);
        map.setZoom(4);
        infowindowRome.close();
        infowindowVenise.close();
        infowindowMailand.close();
    }
}








/************/
/*MAP RUSSIA*/
/************/

function mapRUSSIAdeutsch() {

    /*INIT MAP*/
    let map = new google.maps.Map(document.getElementById('carteCountry'), {
        center: {
            lat: 60,
            lng: 59
        },
        zoom: 4,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false
    });

    /*INIT MARKERS*/
    let markerMoscou = new google.maps.Marker({
        position: {
            lat: 55.7522200,
            lng: 37.6155600
        },
        map: map,
        title: 'Moskau'
    });

    let markerStPetersbourg = new google.maps.Marker({
        position: {
            lat: 59.9386300,
            lng: 30.3141300
        },
        map: map,
        title: 'St. Petersburg'
    });


    /*INIT CONTENT OF INFO WINDOWS*/
    let infowindowMoscou = new google.maps.InfoWindow({
        content: '<a href="#moscouIci">Moskau</a>'
    });

    let infowindowStPetersbourg = new google.maps.InfoWindow({
        content: '<a href="#stPetersIci">St. Petersburg</a>'
    });


    /*OPEN INFO WINDOWS ON LOAD*/
    infowindowMoscou.open(map, markerMoscou);
    infowindowStPetersbourg.open(map, markerStPetersbourg);


    /*ON CLICK --> CLOSE AND OPEN OF INFO WINDOWS*/
    markerMoscou.addListener('click', function () {
        infowindowMoscou.open(map, markerMoscou);
    });

    markerStPetersbourg.addListener('click', function () {
        infowindowStPetersbourg.open(map, markerStPetersbourg);
    });

    //SEULEMENT MARCHE AVEC UN PORTABLE ET NE PAS AVEC RETRECIR LECRAN PC (QUELQUES PROBLEMES POUR RESIZE SI ON AGRADIT LA FENETRE)
    //SEULEMENT MARCHE SI ON RECHARGER LE SITE (POUR MOBILE ET PC)
    if (window.matchMedia("(max-width: 800px)").matches) {
        let center = map.getCenter();
        map.setCenter(center);
        map.setZoom(2);
        infowindowMoscou.close();
        infowindowStPetersbourg.close();
    }
}







/*************/
/*MAP ENGLAND*/
/*************/

function mapENGLANDdeutsch() {

    /*INIT MAP*/
    let map = new google.maps.Map(document.getElementById('carteCountry'), {
        center: {
            lat: 53,
            lng: -1.5
        },
        zoom: 6,
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

    /*INIT CONTENT OF INFO WINDOWS*/
    let infowindowLondres = new google.maps.InfoWindow({
        content: '<a href="#londonIci">London</a>'
    });

    let infowindowManchester = new google.maps.InfoWindow({
        content: '<a href="#manchesterIci">Manchester</a>'
    });
    let infowindowLiverpool = new google.maps.InfoWindow({
        content: '<a href="#liverpoolIci">Liverpool</a>'
    });

    /*OPEN INFO WINDOWS ON LOAD*/
    infowindowLondres.open(map, markerLondres);
    infowindowManchester.open(map, markerManchester);
    infowindowLiverpool.open(map, markerLiverpool);


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

    //SEULEMENT MARCHE AVEC UN PORTABLE ET NE PAS AVEC RETRECIR LECRAN PC (QUELQUES PROBLEMES POUR RESIZE SI ON AGRADIT LA FENETRE)
    //SEULEMENT MARCHE SI ON RECHARGER LE SITE (POUR MOBILE ET PC)
    if (window.matchMedia("(max-width: 800px)").matches) {
        let center = map.getCenter();
        map.setCenter(center);
        map.setZoom(5);
        infowindowLondres.close();
        infowindowLiverpool.close();
        infowindowManchester.close();
    }
}




/****************************************************************************/
/****************************ENGLISH LANGUAGE********************************/
/****************************************************************************/




/************/
/*MAP SWEDEN*/
/************/

function mapSWEDENenglish() {

    /*INIT MAP*/
    let map = new google.maps.Map(document.getElementById('carteCountry'), {
        center: {
            lat: 60,
            lng: 15
        },
        zoom: 5,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false
    });

    /*INIT MARKERS*/
    let markerStockholm = new google.maps.Marker({
        position: {
            lat: 59.334591,
            lng: 18.063240
        },
        map: map,
        title: 'Stockholm'
    });


    /*INIT CONTENT OF INFO WINDOWS*/
    let infowindowStockholm = new google.maps.InfoWindow({
        content: '<a href="#stockholmIci">Stockholm</a>'
    });

    /*OPEN INFO WINDOWS ON LOAD*/
    infowindowStockholm.open(map, markerStockholm);



    /*ON CLICK --> CLOSE AND OPEN OF INFO WINDOWS*/
    markerStockholm.addListener('click', function () {
        infowindowStockholm.open(map, markerStockholm);
    });

    //SEULEMENT MARCHE AVEC UN PORTABLE ET NE PAS AVEC RETRECIR LECRAN PC (QUELQUES PROBLEMES POUR RESIZE SI ON AGRADIT LA FENETRE)
    //SEULEMENT MARCHE SI ON RECHARGER LE SITE (POUR MOBILE ET PC)
    if (window.matchMedia("(max-width: 800px)").matches) {
        let center = map.getCenter();
        map.setCenter(center);
        map.setZoom(4);
        infowindowStockholm.close();
    }

}




/************/
/*MAP ITALY*/
/************/

function mapITALYenglish() {

    /*INIT MAP*/
    let map = new google.maps.Map(document.getElementById('carteCountry'), {
        center: {
            lat: 42.5,
            lng: 13.3
        },
        zoom: 5,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false
    });

    /*INIT MARKERS*/
    let markerRome = new google.maps.Marker({
        position: {
            lat: 41.8919300,
            lng: 12.5113300
        },
        map: map,
        title: 'Rom'
    });

    let markerVenise = new google.maps.Marker({
        position: {
            lat: 45.4371300,
            lng: 12.3326500
        },
        map: map,
        title: 'Venedig'
    });

    let markerMailand = new google.maps.Marker({
        position: {
            lat: 45.464,
            lng: 9.189
        },
        map: map,
        title: 'Mailand'
    });

    /*INIT CONTENT OF INFO WINDOWS*/
    let infowindowRome = new google.maps.InfoWindow({
        content: '<a href="#romeIci">Rome</a>'
    });

    let infowindowVenise = new google.maps.InfoWindow({
        content: '<a href="#veniseIci">Venice</a>',
    });
    let infowindowMailand = new google.maps.InfoWindow({
        content: '<a href="#milanIci">Milan</a>'
    });

    infowindowRome.open(map, markerRome);
    infowindowVenise.open(map, markerVenise);
    infowindowMailand.open(map, markerMailand);

    /*ON CLICK --> CLOSE AND OPEN OF INFO WINDOWS*/
    markerRome.addListener('click', function () {
        infowindowRome.open(map, markerRome);
    });

    markerVenise.addListener('click', function () {
        infowindowVenise.open(map, markerVenise);
    });

    markerMailand.addListener('click', function () {
        infowindowMailand.open(map, markerMailand);
    });

    //SEULEMENT MARCHE AVEC UN PORTABLE ET NE PAS AVEC RETRECIR LECRAN PC (QUELQUES PROBLEMES POUR RESIZE SI ON AGRADIT LA FENETRE)
    //SEULEMENT MARCHE SI ON RECHARGER LE SITE (POUR MOBILE ET PC)
    if (window.matchMedia("(max-width: 800px)").matches) {
        let center = map.getCenter();
        map.setCenter(center);
        map.setZoom(4);
        infowindowRome.close();
        infowindowMailand.close();
        infowindowVenise.close();
    }
}
