var rows;

		d3.csv("data.csv", function(d) {
		  return {
		    value : d.VALUE,
		    value2 : d.VALUE_2,
		    value3 : d.VALUE_3,
		    value4 : d.VALUE_4,
		    id : d.MOVEMENT_ID,

		  };
		}).then(function(data) {
		  rows = data;
		  addDensity(1);
		});

		function addDensity(i) {
			switch(i){
				// case 1:
				// 	for (x in statesData.features){
				// 		statesData.features[x].properties.density=rows[x].value;
				// 	}
				// 	geojson = L.geoJson(statesData, {
				// 		style: style,
				// 		onEachFeature: onEachFeature
				// 	}).addTo(map).bringToFront();
				// 	break;
				// case 2:
				// 	for (x in statesData.features){
				// 		statesData.features[x].properties.density=rows[x].value2;
				// 	}
				// 	geojson = L.geoJson(statesData, {
				// 		style: style,
				// 		onEachFeature: onEachFeature
				// 	}).addTo(map).bringToFront();
				// 	break;
				// case 3:
				// 	for (x in statesData.features){
				// 		statesData.features[x].properties.density=rows[x].value3;
				// 	}
				// 	geojson = L.geoJson(statesData, {
				// 		style: style,
				// 		onEachFeature: onEachFeature
				// 	}).addTo(map).bringToFront();
				// 	break;
				// case 4:
				// 	for (x in statesData.features){
				// 		statesData.features[x].properties.density=rows[x].value4;
				// 	}
				// 	geojson = L.geoJson(statesData, {
				// 		style: style,
				// 		onEachFeature: onEachFeature
				// 	}).addTo(map).bringToFront();
				// 	break;

				case 1:
					for (x in statesData.features){
						statesData.features[x].properties.density=rows[x].value;
					}
					map.removeLayer(geojson);
					geojson = L.geoJson(statesData, {
						style: style,
						onEachFeature: onEachFeature
					}).addTo(map);
					break;
				case 2:
					for (x in statesData.features){
						statesData.features[x].properties.density=rows[x].value2;
					}
					map.removeLayer(geojson);
					geojson = L.geoJson(statesData, {
						style: style,
						onEachFeature: onEachFeature
					}).addTo(map);
					break;
				case 3:
					for (x in statesData.features){
						statesData.features[x].properties.density=rows[x].value3;
					}
					map.removeLayer(geojson);
					geojson = L.geoJson(statesData, {
						style: style,
						onEachFeature: onEachFeature
					}).addTo(map);
					break;
				case 4:
					for (x in statesData.features){
						statesData.features[x].properties.density=rows[x].value4;
					}
					map.removeLayer(geojson);
					geojson = L.geoJson(statesData, {
						style: style,
						onEachFeature: onEachFeature
					}).addTo(map);
					break;
				}
			}
