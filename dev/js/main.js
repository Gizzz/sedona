/// <reference path="../typings/jquery/jquery.d.ts"/>

"use strict";

$(function () {
	$(".mobile-menu-open").on("click", function() {
		$(".mobile-menu").addClass("active");
	})

	$(".mobile-menu-close").on("click", function() {
		$(".mobile-menu").removeClass("active");
	})
});