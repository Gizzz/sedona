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

	$("input.js-datepicker").datepicker({
		dateFormat: "d MM yy",
	});

	// number picker

	$(".number-picker .plus").on("click", function() {
		var $input = $(this).parent().find("input");
    	var value = $input.val();
    	value = parseInt(value);

    	if (isNaN(value)) 
    		value = 1;
    	else
    		value = value + 1;

    	$input.val(value);
    })

    $(".number-picker .minus").on("click", function() {
		var $input = $(this).parent().find("input");
    	var value = $input.val();
    	value = parseInt(value);

    	if (isNaN(value) || value <= 0) 
    		value = 0;
    	else 
    		value = value - 1;

    	$input.val(value);
    })
});