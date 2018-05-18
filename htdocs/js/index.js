function initMap() {
	var Default = {
		center: {
			lat: 41.7900,
			lng: -87.5980
		},
		bounds: {
			minLat: 41.76590,
			maxLat: 41.8239,
			minLng: -87.6376,
			maxLng: -87.5570
		},
		styles: [
			{
				"featureType": "poi.business",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ebe3cd"
					}
				]
			},
			{
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#523735"
					}
				]
			},
			{
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#f5f1e6"
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#c9b2a6"
					}
				]
			},
			{
				"featureType": "administrative.land_parcel",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#dcd2be"
					}
				]
			},
			{
				"featureType": "administrative.land_parcel",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#ae9e90"
					}
				]
			},
			{
				"featureType": "landscape.natural",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#dfd2ae"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#dfd2ae"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#93817c"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#a5b076"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#447530"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#f5f1e6"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#fdfcf8"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#f8c967"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#e9bc62"
					}
				]
			},
			{
				"featureType": "road.highway.controlled_access",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#e98d58"
					}
				]
			},
			{
				"featureType": "road.highway.controlled_access",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#db8555"
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#806b63"
					}
				]
			},
			{
				"featureType": "transit.line",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#dfd2ae"
					}
				]
			},
			{
				"featureType": "transit.line",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#8f7d77"
					}
				]
			},
			{
				"featureType": "transit.line",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#ebe3cd"
					}
				]
			},
			{
				"featureType": "transit.station",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#b9d3c2"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#92998d"
					}
				]
			}
		]
	};

	var Map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: Default.center,
		styles: Default.styles,
		clickableIcons: false,
		mapTypeControl: false,
		panControl: false,
		streetViewControl: false,
		zoomControl: true,
		maxZoom: 18,
		minZoom: 13,
		zoomControlOptions: {
			position: google.maps.ControlPosition.RIGHT_TOP
		},

		fullscreenControl: false
	});
}