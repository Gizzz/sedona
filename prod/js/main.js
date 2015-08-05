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

	// datepicker

	$.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );

	$("input.date").datepicker({
		dateFormat: "d MM yy",
	});

	// number picker

	$(".number-picker .plus").on("click", function() {
		var $input = $(this).parent().find("input.number");
    	var value = $input.val();
    	value = parseInt(value);

    	if (isNaN(value)) 
    		value = 1;
    	else
    		value = value + 1;

    	$input.val(value);
    })

    $(".number-picker .minus").on("click", function() {
		var $input = $(this).parent().find("input.number");
    	var value = $input.val();
    	value = parseInt(value);

    	if (isNaN(value) || value <= 0) 
    		value = 0;
    	else 
    		value = value - 1;

    	$input.val(value);
    })

    // map

    function initialize() {
        var mapOptions = {
            center: { lat: -34.397, lng: 150.644},
            zoom: 9,
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