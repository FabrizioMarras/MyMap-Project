// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

function initMap() { // initialise the map function: place the map inside the div and show the current location of the user.
// map and infoWindow as variables
  var map, infoWindow;

    // New Map
    map = new google.maps.Map(document.getElementById("map"), {
      center: {lat:0, lng:0},
      zoom: 6
    }); // end of var "options"
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
  //1. respond to the search typing
  function searchUser() { // binding the keyup element - activate the reading of the JSON when someone click to write on the search.before that there is no element displayed on the page
   	var searchField = $('#search').val(); // get the typed text.
   	var myExp = new RegExp(searchField, "i"); // regular expression to check case insensitive (typing "i") in the search field.
   		$.getJSON('data.json', function(data) { // Read the JSON data and feed the data into a function literal.
        $.each(data, function(key, val) { // each statement to output the list items.
          if ((val.name.search(myExp) != -1) || // after reading the typing: not equal to -1, means it did find the data.
  				    (val.city.search(myExp) != -1) ||
  				    (val.department.search(myExp) != -1) ||
  				    (val.job.search(myExp) != -1) ||
  				    (val.description.search(myExp) != -1) ||
  					  (val.skills.join().search(myExp) != -1))
  // 2. insert the location in the geocoder to get locationCoordinates.
    console.log(val.coords)



      geocode();// call the geocode function:

      var lat, lng, coordinates, user;


      // Geocode function:
      function geocode() {
        // e.preventDefault(); // prevent the default submission effect.
      // set the location = to the form input value
        // var location = document.getElementById("location-input").value;

        axios.get("https://maps.googleapis.com/maps/api/geocode/json",{
          params:{
            address: val.city,
            key:'AIzaSyB-Kmj5CjwXxHXXY0kAaKU3zze7265HUgg'
          }
        })
        .then(function(response){
            // console.log(response) // help check the paths to retreive the desired informations.

      // get coordinates from the geolocator and pass it inside the object coords.
            // geometry
            coordinates = {
              lat : response.data.results[0].geometry.location.lat,
              lng : response.data.results[0].geometry.location.lng
            };
            user = {
              coords: coordinates
            }
            console.log(user)
        })
        .catch(function(error) {
          console.log(error);
        })
      }


      // place the coordinates inside a property of users.


      // add the marker for Users as shown below.
      });
// 0. create an Array where the searchUser data are saved.
var users = [
  // {
  //   coords:{lat:52.379189, lng:4.899431},
  //   iconImage: "images/Name_lastname_tn.jpg",// to add a different marker icon image.
  //   content: "<h1>Amsterdam</h1>"
  // },
  // {
  //   coords:{lat:51.509865, lng:-0.118092}
  // }
];
      // loop through the array users and add the markers.
          for(var i = 0;i < users.length;i++){
            // add marker per each user in the list

            addMarker(users[i]);
          }

      //Add Marker function:
        function addMarker(props) {
          //set marker to null
          var marker = null;
          // create the marker with "position" and "map" as properties:
          marker = new google.maps.Marker({
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
                  // infoWindow.open(map, marker);

                });
            }
          } //Marker Function End.
      }); // end of getJSON
    }// end of searchUser
  //2. convert info in JSON to useful info: create variables and place values into them when necessary.

  // initialise the search as people type inside the search input box.
    $('#search').keyup(searchUser);

} //initMap Function End.
