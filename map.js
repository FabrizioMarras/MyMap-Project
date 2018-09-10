var mymap = L.map('map').setView([52.379189, 4.899431], 13); // pointing to Amsterdam - it would be nice if the app read geolocation and center on current location of user.

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: ' <a href="https://fabriziomarras.com/">Fabrizio Marras | Designer and Developer </a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'sk.eyJ1Ijoiam9zaGZhbm5lMTAwMCIsImEiOiJjamx3M2k3NW4weHBsM3FsZG45aHU0aDRzIn0.cj0glIPrFJF84Q2b8d190A'
}).addTo(mymap);
// Marker
var marker = L.marker([52.379189, 4.899431]); // Amsterdam address - nice to have a geolocation.
marker.addTo(mymap);
// Pop-up
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
