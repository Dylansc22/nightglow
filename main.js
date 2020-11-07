mapboxgl.accessToken =
  "pk.eyJ1IjoiZHlsYW5jIiwiYSI6Im53UGgtaVEifQ.RJiPqXwEtCLTLl-Vmd1GWQ";
var map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/dylanc/ckh78yae00byv19k62kw9aveg", // style URL
  center: [-110.953, 32.251], // starting position [lng, lat]
  zoom: 16, // starting zoom
  pitch: 60,
  bearing: -32,
  minZoom: 12,
  maxBounds: [
    [-111.2, 32],
    [-110.6, 32.5],
  ], //Southwest & Northeast Bounds
});