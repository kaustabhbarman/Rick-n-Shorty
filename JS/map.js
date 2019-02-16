function gMapReload(e) {
	var start = document.getElementById('route').getAttribute("data-loc");
	var coord = e.latlng;
	var lat = coord.lat;
	var lon = coord.lng;
	
	var reload = "<iframe style='overflow:hidden;width: 100%;' height='700' frameborder='0' style='border:0'";
	reload += "src='https://www.google.com/maps/embed/v1/directions?origin=place_id:"+start+"&destination="+lat+","+lon+"&key=AIzaSyB4VIRQy7MBfOztHtc_SdlEk6x1YdS9rBw' allowfullscreen></iframe>";

	document.getElementById("route").innerHTML = reload;
}

function changeLoc(location){
	document.getElementById('route').setAttribute('data-loc', location);

	var reload = "<iframe style='overflow:hidden;width: 100%;' height='700' frameborder='0' style='border:0'";
	reload += "src='https://www.google.com/maps/embed/v1/place?q=place_id:"+location+"&key=AIzaSyB4VIRQy7MBfOztHtc_SdlEk6x1YdS9rBw' allowfullscreen></iframe>";

	document.getElementById("route").innerHTML = reload;
}

function mapReload() {
	// body...
}