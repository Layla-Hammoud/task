const user_position = document.getElementById("position");
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        user_position.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function showPosition(position) {
    user_position.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  }
  getLocation() 