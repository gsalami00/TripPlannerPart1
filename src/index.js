console.log('src/index.js ran correctly');
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
