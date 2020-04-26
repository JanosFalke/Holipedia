document.addEventListener('DOMContentLoaded', mouseHoverCitiesNav, false);

function mouseHoverCitiesNav() {
    let countryName = document.querySelectorAll("#menu-box > li");
    let cities = document.querySelectorAll("#menu-box > li ul");
    for (let i = 0; i < cities.length; i++) {
        cities.item(i).addEventListener("mouseover", function () {
                countryName.item(i).setAttribute("class", "hoverCitiesNav");
        });
        cities.item(i).addEventListener("mouseout", function () {
                countryName.item(i).setAttribute("class", "none");
        });

    }
}
