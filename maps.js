function initMap() {

  // Map options
  var options = {
    zoom: 8,
    center: {lat: -34.397, lng: 150.644}
  };

  // Create map
  var map = new google.maps.Map(document.getElementById('myMap'), options);

  // Add marker
  new google.maps.Marker({
    position: {lat: -34.397, lng: 150.644}, 
    map: map
  });

}
