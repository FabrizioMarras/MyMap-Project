// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

  function initMap() { // initialise the map function
// Locations as variables

// Map Options - set current zoom and center the map on coordinates of choice.
  var options = {
    center: {lat:0, lng:0},
    zoom: 6
  } // end of var "options"
  var map, infoWindow;


    // New Map
    map = new google.maps.Map(document.getElementById("map"), options);
    // New window box
    infoWindow = new google.maps.InfoWindow;

// Try HTML5 geolocation.
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var currentLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    // set a windowBox pointing at the current Location.
    // infoWindow.setPosition(currentLocation); // set current position to the windowBox
    // infoWindow.setContent('You are here!'); // set content of the windowBox
    // infoWindow.open(map); // open the windowBox onto the map

    map.setCenter(currentLocation); // center the map to your current location.

  }, function() {
    handleLocationError(true, infoWindow, map.getCenter());
  }) // end of getCurrentPosition function;
} else {
  // Browser doesn't support Geolocation
  handleLocationError(false, infoWindow, map.getCenter());
} // end IF ELSE statement.

// Error function
  function handleLocationError(browserHasGeolocation, infoWindow, currentLocation) {
    infoWindow.setPosition(currentLocation);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }

// Adding markers

  // Array of users having different coordinates this will be the JSON file where all the user info are stored.
    var users = [
      {
        coords:{lat:52.379189, lng:4.899431},
        iconImage: "images/Name_lastname_tn.jpg",// to add a different marker icon image.
        content: "<h1>Amsterdam</h1>"
      },
      {
        coords:{lat:51.509865, lng:-0.118092}
      }
    ];

  // loop through the array users and add the markers.
      for(var i = 0;i < users.length;i++){
        // add marker per each user in the list
        addMarker(users[i]);
      }


  //Add Marker function:
    function addMarker(props) {
      // create the marker with "position" and "map" as properties:
      var marker = new google.maps.Marker({
        position: props.coords,
        map:map,
      });
      // check if a "icon" property is set when calling the function "addMarker()"
        if(props.iconImage) { //if in the props there is a icon image
          // set the icon image in the "icon" property of the marker.
          marker.setIcon(props.iconImage);
        }
        // check if a "content" property is set in the function call "addMarker"
          if(props.content) {
        // create a new INFO window with a "content" property
            var infoWindow = new google.maps.InfoWindow({
              content: props.content
            });
        // Open the popup window on click.
            marker.addListener("click", function() {
              infoWindow.open(map, marker);
            });
        }
      } //Marker Function End.

} //initMap Function End.
