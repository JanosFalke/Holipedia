function toggleMenu() {
    let menuBox = document.getElementById('menu-box');
    let menu = document.getElementById('menu');
    if (menuBox.style.display == "block") { // Menu visible --> rendre caché
        menuBox.style.display = "none";
        document.getElementById("menu").innerHTML = "Découvrir &#9662;";

    } else { // Menu caché --> rendre visible
        menuBox.style.display = "block";
        document.getElementById("menu").innerHTML = "Découvrir &#9652;";

    }

    window.addEventListener('mouseup', function (event) { // Fermer menu click partout
        if (event.target != menu && event.target.parentNode != menu) {
            menuBox.style.display = "none";
            document.getElementById("menu").innerHTML = "Découvrir &#9662;";
        }
    });
}



function toggleSearchMenu() {
    let menuBoxSearch = document.getElementById('menu-boxSearch');
    let menu2 = document.getElementById('menu2');

    if (menuBoxSearch.style.display == "block") { // Menu visible --> rendre caché
        menuBoxSearch.style.display = "none";
        xDiv.style.height = ''
    } else { // Menu caché --> rendre visible
        menuBoxSearch.style.display = "block";
    }


    let xDiv = document.getElementById('informationsTop'); // Agrandir menu quand visible

    if (xDiv.style.height == '') {
        xDiv.style.height = '440px'
    } else {
        xDiv.style.height = ''
    }


    window.addEventListener('mouseup', function (event) { // Fermer menu click partout
        if (event.target != menu2 && event.target.parentNode != menu2) {
            menuBoxSearch.style.display = "none";
            xDiv.style.height = ''
        }
    });
}





function toggleMenuLanguage() {
    let menuBox = document.getElementById('menu-boxLangue');
    let menu = document.getElementById('menuLangue');
    if (menuBox.style.display == "block") { // Menu visible --> rendre caché
        menuBox.style.display = "none";

    } else { // Menu caché --> rendre visible
        menuBox.style.display = "block";

    }

    window.addEventListener('mouseup', function (event) { // Fermer menu click partout
        if (event.target != menu && event.target.parentNode != menu) {
            menuBox.style.display = "none";
        }
    });
}









function toggleMenuDeutsch() {
    let menuBox = document.getElementById('menu-box');
    let menu = document.getElementById('menu');
    if (menuBox.style.display == "block") { // Menu visible --> rendre caché
        menuBox.style.display = "none";
        document.getElementById("menu").innerHTML = "Entdecken &#9662;";

    } else { // Menu caché --> rendre visible
        menuBox.style.display = "block";
        document.getElementById("menu").innerHTML = "Entdecken &#9652;";

    }

    window.addEventListener('mouseup', function (event) { // Fermer menu click partout
        if (event.target != menu && event.target.parentNode != menu) {
            menuBox.style.display = "none";
            document.getElementById("menu").innerHTML = "Entdecken &#9662;";
        }
    });
}



function toggleMenuEnglish() {
    let menuBox = document.getElementById('menu-box');
    let menu = document.getElementById('menu');
    if (menuBox.style.display == "block") { // Menu visible --> rendre caché
        menuBox.style.display = "none";
        document.getElementById("menu").innerHTML = "Discover &#9662;";

    } else { // Menu caché --> rendre visible
        menuBox.style.display = "block";
        document.getElementById("menu").innerHTML = "Discover &#9652;";

    }

    window.addEventListener('mouseup', function (event) { // Fermer menu click partout
        if (event.target != menu && event.target.parentNode != menu) {
            menuBox.style.display = "none";
            document.getElementById("menu").innerHTML = "Discover &#9662;";
        }
    });
}
