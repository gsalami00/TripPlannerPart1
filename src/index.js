const marker = require('./marker')
const mapboxgl = require('mapbox-gl');
//Gini's key
//pk.eyJ1IjoiZ3NhbGFtaTAwIiwiYSI6ImNqaW01ZGN5MTAwanMza3FibGFpbndiaWIifQ.Ch0zTuP0witv8okYYlAgRQ
mapboxgl.accessToken =
  'pk.eyJ1IjoicHJvZGlnaW91czEzIiwiYSI6ImNqaW01ZGhsdzAwamIzdmxmYmNwdWFrb2IifQ.yxeed6uKNhc8WuPw5IYH4Q';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

marker('Hotels', 'http://i.imgur.com/D9574Cu.png', [-74.009151, 40.705086], map)
marker('Activity', 'http://i.imgur.com/WbMOfMl.png', [-74.017185, 40.708811], map)
// marker('Restaurant', 'http://i.imgur.com/cqR6pUI.png', [-74.005450, 40.712332], map)
marker('Restaurant', '../public/pokeball.png', [-74.005450, 40.712332], map)


// const coordinates = [-74.009151, 40.705086];
// const newElement = document.createElement("div");
// newElement.style.width = "32px";
// newElement.style.height = "39px";
// newElement.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(newElement).setLngLat(coordinates).addTo(map);

// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

