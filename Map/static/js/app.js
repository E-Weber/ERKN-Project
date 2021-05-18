var myMap = L.map("my-custom-map", {
    center: [39.5, -98.35],
    zoom: 4
});

L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: 'pk.eyJ1IjoiYmVuamFtZW5hbGZvcmQiLCJhIjoiY2p2NWg5enJkMHVyMzQ0bWtmY2FtNmM5bCJ9.mFsGlikCvtB_-6xIFCVPiQ'
}).addTo(myMap);