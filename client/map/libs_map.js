 hasGeo = function() {
   var node = Nodes.findOne({}, {
       fields: {
           'data.data': 1
       }
   });

   return node.data.data.lat ? true : false;
 }

 applyLatLngToLayer = function(map,d) {
     var y = d.geometry.coordinates[1];
     var x = d.geometry.coordinates[0];
     return map.latLngToLayerPoint(new L.LatLng(x, y))
 }

 applyLatLngToLayerForEdges = function(map, coords) {
     var x = coords[0];
     var y = coords[1];
     return map.latLngToLayerPoint(new L.LatLng(x, y));
 }

 isValidCoordinate = function(lat, lng) {
     var valLat = parseFloat(lat);
     var valLng = parseFloat(lng);
     return (!isNaN(valLat) && valLat <= 90 && valLat >= -90 && !isNaN(valLng) && valLng <= 180 && valLng >= -180) ? true : false;
 }


 getRandomColor = function() {
     var letters = '0123456789ABCDEF'.split('');
     var color = '#';
     for (var i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
     }
     return color;
 };
// Use Leaflet to implement a D3 geometric transformation.
convertLatLngToCoords = function(lat,lng) {
    return map.latLngToLayerPoint(new L.LatLng(lat, lng))
}

convertCoordsToLatLng = function(x,y) {
    return map.layerPointToLatLng(new L.Point(x, y))
}