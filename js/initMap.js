var map;
function initMap(){
	//JSON from Google Maps styling
	var styledMapType = new google.maps.StyledMapType(
	[
	  {
		elementType: 'geometry',
		stylers: [
		  {
			color: '#ebe3cd'
		  }
		]
	  },
	  {
		elementType: 'labels.text.fill',
		stylers: [
		  {
			color: '#523735'
		  }
		]
	  },
	  {
		elementType: 'labels.text.stroke',
		stylers: [
		  {
			color: '#f5f1e6'
		  }
		]
	  },
	  {
		featureType: 'administrative',
		elementType: 'geometry.stroke',
		stylers: [
		  {
			color: '#c9b2a6'
		  }
		]
	  },
	  {
		featureType : 'administrative.land_parcel',
		elementType : 'geometry.stroke',
		stylers: [
		  {
			color: '#dcd2be'
		  }
		]
	  },
	  {
		featureType: 'administrative.land_parcel',
		elementType: 'labels',
		stylers: [
		  {
			visibility: 'off'
		  }
		]
	  },
	  {
		featureType: 'administrative.land_parcel',
		elementType: 'labels.text.fill',
		stylers: [
		  {
			color: '#ae9e90'
		  }
		]
	  },
	  {
		featureType: 'landscape.natural',
		elementType: 'geometry',
		stylers: [
		  {
			color: '#dfd2ae'
		  }
		]
	  },
	  {
		featureType: 'poi',
		elementType: 'geometry',
		stylers: [
		  {
			color: '#dfd2ae'
		  }
		]
	  },
	  {
		featureType: 'poi',
		elementType: 'labels.text',
		stylers: [
		  {
			visibility: 'off'
		  }
		]
	  },
	  {
		featureType: 'poi',
		elementType: 'labels.text.fill',
		stylers: [
		  {
			color: '#93817c'
		  }
		]
	  },
	  {
		featureType: 'poi.attraction',
		stylers: [
		  {
			visibility: 'simplified'
		  }
		]
	  },
	  {
		featureType: 'poi.park',
		elementType: 'geometry.fill',
		stylers: [
		  {
			color: '#a5b076'
		  }
		]
	  },
	  {
		featureType: 'poi.park',
		elementType: 'labels.text.fill',
		stylers: [
		  {
			color: '#447530'
		  }
		]
	  },
	  {
		featureType: 'road',
		elementType: 'geometry',
		stylers: [
		  {
			color: '#f5f1e6'
		  }
		]
	  },
	  {
		featureType: 'road.arterial',
		stylers: [
		  {
			visibility: 'off'
		  }
		]
	  },
	  {
		featureType: 'road.arterial',
		elementType: 'geometry',
		stylers: [
		  {
			color: '#fdfcf8'
		  }
		]
	  },
	  {
		featureType: 'road.highway',
		elementType: 'geometry',
		stylers: [
		  {
			color: '#f8c967'
		  }
		]
	  },
	  {
		featureType: 'road.highway',
		elementType: 'geometry.stroke',
		stylers: [
		  {
			color: '#e9bc62'
		  }
		]
	  },
	  {
		featureType: 'road.highway',
		elementType: 'labels',
		stylers: [
		  {
			visibility: 'off'
		  }
		]
	  },
	  {
		featureType: 'road.highway.controlled_access',
		elementType: 'geometry',
		stylers: [
		  {
			color: '#e98d58'
		  }
		]
	  },
	  {
		featureType: 'road.highway.controlled_access',
		elementType: 'geometry.stroke',
		stylers: [
		  {
			color: '#db8555'
		  }
		]
	  },
	  {
		featureType: 'road.local',
		stylers: [
		  {
			visibility: 'off'
		  }
		]
	  },
	  {
		featureType: 'road.local',
		elementType: 'labels',
		stylers: [
		  {
			visibility: 'off'
		  }
		]
	  },
	  {
		featureType: 'road.local',
		elementType: 'labels.text.fill',
		stylers: [
		  {
			color: '#806b63'
		  }
		]
	  },
	  {
		featureType: 'transit.line',
		elementType: 'geometry',
		stylers: [
		  {
			color: '#dfd2ae'
		  }
		]
	  },
	  {
		featureType: 'transit.line',
		elementType: 'labels.text.fill',
		stylers: [
		  {
			color: '#8f7d77'
		  }
		]
	  },
	  {
		featureType: 'transit.line',
		elementType: 'labels.text.stroke',
		stylers: [
		  {
			color: '#ebe3cd'
		  }
		]
	  },
	  {
		featureType: 'transit.station',
		elementType: 'geometry',
		stylers: [
		  {
			color: '#dfd2ae'
		  }
		]
	  },
	  {
		featureType: 'water',
		elementType: 'geometry.fill',
		stylers: [
		  {
			color: '#b9d3c2'
		  }
		]
	  },
	  {
		featureType: 'water',
		elementType: 'labels.text.fill',
		stylers: [
		  {
			color: '#92998d'
		  }
		]
	  }
	],
    {name: 'Styled Map'});
	
	//var location = {lat: 55.8651505, lng: -4.2576299};
	map = new google.maps.Map(document.getElementById('map'), {
		//center: {lat: 55.8651505, lng: -4.2576299},
		center: {lat: 55.8651505, lng: -4.2576299},
		zoom: 7,
		//zoom: 4,
		
		scrollwheel: false, //so that scrolling does not make map zoom
		
		mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
        });

		
		
		//var marker = new google.maps.Marker({
			//position: location,
			//map:map,
		//});
	
	
	
        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
	
	var marker_g = new google.maps.Marker({
		position: {lat: 55.8651505, lng: -4.2576299}, // lat/long of marker
		map: map,
		animation: google.maps.Animation.DROP, // drops marker in from top
		title: "Glasgow - a major Scottish city where I stayed", // title on hover over marker
	});
	var marker_s = new google.maps.Marker({
		position: {lat: 56.11903, lng: -3.93682}, // lat/long of marker
		map: map,
		animation: google.maps.Animation.DROP, // drops marker in from top
		title: "Stirling - the small city where William Wallace battled!" + String.fromCodePoint(0x1F5E1), // code point is supposed to be dagger emoji
	});
	var marker_e = new google.maps.Marker({
		position: {lat: 55.9520607, lng: -3.19648}, // lat/long of marker
		map: map,
		animation: google.maps.Animation.DROP, // drops marker in from top
		title: "Edinburgh - pronounced 'Edin-borough', the capital of Scotland", // title on hover over marker
	});
	var marker_l = new google.maps.Marker({
		position: {lat: 56.228326, lng: -4.623843}, // lat/long of marker
		map: map,
		animation: google.maps.Animation.DROP, // drops marker in from top
		title: "Loch Lomond - loch means lake in Scottish Gaelic & Lomond is Scottishly pronounced 'low-mund'", // title on hover over marker
	});
	var marker_fw = new google.maps.Marker({
		position: {lat: 56.819817, lng: -5.105218}, // lat/long of marker
		map: map,
		animation: google.maps.Animation.DROP, // drops marker in from top
		title: "Fort William - where I stayed in the Highlands" + String.fromCodePoint(0x1FE0F), // code point is supposed to be red heart emoji
	});
	var marker_fa = new google.maps.Marker({
		position: {lat: 57.146660, lng: -4.674836}, // lat/long of marker
		map: map,
		animation: google.maps.Animation.DROP, // drops marker in from top
		title: "Fort Augustus - where Loch Ness is" + String.fromCodePoint(0x1F409), // code point is supposed to be dragon emoji
	});
	var marker_a = new google.maps.Marker({
		position: {lat: 55.415747, lng: -1.705920}, // lat/long of marker
		map: map,
		animation: google.maps.Animation.DROP, // drops marker in from top
		title: "Alnick - a town in England where the one of the Dukes' castle is AND where 'Harry Potter' filmmakers filmed Hogwarts for the first two movies!",
	});
	var marker_y = new google.maps.Marker({
		position: {lat: 53.959405, lng: -1.080077}, // lat/long of marker
		map: map,
		animation: google.maps.Animation.DROP, // drops marker in from top
		title: "York - a city in England where 'Harry Potter' filmmakers got the visual idea of Diagon Alley",
	});
	var marker_b = new google.maps.Marker({
		position: {lat: 54.5968208, lng: -5.9254098}, // lat/long of marker
		map: map,
		animation: google.maps.Animation.DROP, // drops marker in from top
		title: "Belfast - the capital of Northern Ireland", // title on hover over marker
	});
	
	/*DIDN'T WORK
	zoomControl: true;
	zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_CENTER // to make zoom appear on the left
    }
	
	streetViewControl: true;
	streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP // to make street view appear on top left
    }*/
	
	
}
