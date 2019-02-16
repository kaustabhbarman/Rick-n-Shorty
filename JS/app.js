	var map = L.map('map').setView([28.6, 77.2], 10.5);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		id: 'mapbox.light'
	}).addTo(map);

	var marker;

	// control that shows state info on hover
	var info = L.control();

	info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};

	info.update = function (props) {
		this._div.innerHTML = '<h4>Delhi Demand Density</h4>' +  (props ?
			'<b>' +props.WARD_NAME + '</b><br />' + props.density + ' Requests '
			: 'Hover over a city');
	};

	info.addTo(map);


	// get color depending on population density value
	function getColor(d) {
		return 	d > 500  ? '#004D40' :
				d > 250  ? '#00796B' :
				d > 125  ? '#009688' :
				d > 75   ? '#4DB6AC' :
							'#B2DFDB';
	}

	function style(feature) {
		return {
			weight: 2,
			opacity: 1,
			color: 'white',
			dashArray: '3',
			weight: 1, 
			fillOpacity: 0.7,
			fillColor: getColor(feature.properties.density)
		};
	}

	function highlightFeature(e) {
		var layer = e.target;

		layer.setStyle({
			weight: 5,
			color: '#666',
			dashArray: '',
			fillOpacity: 0.7
		});

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
		}

		info.update(layer.feature.properties);
	}

	var geojson;

	function resetHighlight(e) {
		geojson.resetStyle(e.target);
		info.update();
	}

	function zoomToFeature(e) {
		map.fitBounds(e.target.getBounds());
	}

	function setMarker(e){
		if (marker) {
			map.removeLayer(marker);
		}
		var coord = e.latlng;
		var lat = coord.lat;
		var lon = coord.lng;
		marker = L.marker([lat, lon]).addTo(map);
	}

	function onEachFeature(feature, layer) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: setMarker
		});

		layer.on({
			click: gMapReload
		});
	}

	function removeExistingMarker(){
		if (marker) {
			map.removeLayer(marker);
		}
	}

	geojson = L.geoJson(statesData, {
		style: style,
		onEachFeature: onEachFeature
	}).addTo(map);

	var legend = L.control({position: 'bottomright'});

	legend.onAdd = function (map) {

		var div = L.DomUtil.create('div', 'info legend'),
			grades = [0, 75, 125, 250, 500],
			labels = [],
			from, to;

		for (var i = 0; i < grades.length; i++) {
			from = grades[i];
			to = grades[i + 1];

			labels.push(
				'<i style="background:' + getColor(from + 1) + '"></i> ' +
				from + (to ? '&ndash;' + to : '+'));
		}

		div.innerHTML = labels.join('<br>');
		return div;
	};

	legend.addTo(map);


