/// <reference path="../typings/jquery/jquery.d.ts"/>

"use strict";

$(function () {
	// mobile menu

	$(".mobile-menu-open").on("click", function() {
		$(".mobile-menu").addClass("active");
	})

	$(".mobile-menu-close").on("click", function() {
		$(".mobile-menu").removeClass("active");
	})

	// map

    function initialize() {
        var mapOptions = {
            center: {
                lat: -34.397,
                lng: 150.644
            },
            zoom: 8,
            scrollwheel: false,
            draggable: false,
            disableDoubleClickZoom: true,
            disableDefaultUI: true,
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
    }

    google.maps.event.addDomListener(window, 'load', initialize);
});