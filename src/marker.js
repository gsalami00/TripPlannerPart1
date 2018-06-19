const mapboxgl = require('mapbox-gl');



function marker(type, imageUrl, coordinates, map) {
    const newElement = document.createElement("div");
    newElement.style.width = "32px";
    newElement.style.height = "39px";
    newElement.style.backgroundImage = 'url(' + imageUrl + ')';
    new mapboxgl.Marker(newElement).setLngLat(coordinates).addTo(map);
}


// const coordinates = [-74.009151, 40.705086];
// const newElement = document.createElement("div");
// newElement.style.width = "32px";
// newElement.style.height = "39px";
// newElement.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(newElement).setLngLat(coordinates).addTo(map);

module.exports = marker;