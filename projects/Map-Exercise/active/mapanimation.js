mapboxgl.accessToken = 'pk.eyJ1IjoiZHlsYW5zaWNhcmQiLCJhIjoiY2t1bmFvcmt2M3pkdjJwbnowdm1qNWd6ayJ9.DgIBxKKkyx0P3nVjJJPDyQ'


// create the map
let map = new mapboxgl.Map({
  container: 'map',
  // style: 'mapbox://styles/mapbox/streets-v11',
  style: 'mapbox://styles/mapbox/satellite-streets-v11',
  center: [-71.091542,42.358862],
  zoom: 14
})

// add a marker
let marker = new mapboxgl.Marker()
  .setLngLat([-71.091542,42.358862])
  .addTo(map);


// list of bus stops
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

// loop through coords every 1000ms, changing marker to new coord
let counter = 0;

function move() {
  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    console.log(map)
    // changes the center to the new marker coords, with transition
    map.easeTo({center: busStops[counter]});
    counter++
    move();
  }, 1000)
}