function initMap() {

    // Map options
    var options = {
      zoom: 8, 
      center: {lat: -34.397, lng: 150.644} 
    }
  
    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);
  
    // Add marker
    new google.maps.Marker({
      position: {lat: -34.397, lng: 150.644},
      map: map
    });
  
  }
