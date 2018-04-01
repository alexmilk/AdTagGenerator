/*!
* Rotator.js
* A javascript header rotator built on jQuery with extensive features and expandability.
*
* @author  Alex Milkis
* @source  https://github.com/alexmilk/AdTagGenerator/
* @copyright  MIT License
* @version  v0.1
*/

(function ($) {

	$.Rotator = function (element, options) {

		this.version = '0.1';

				var defaults = {
			first: 1, // which slide num to start at
			random: false, // start at a random slide (overrides config.first)
			reorderSlides: false, // reorder the slides by rewriting to DOM if they are in random order
			transition: 'fade', // transition name
			transitionDuration: 1000, // effect speed in milliseconds
			transitions: {}, // pass in additional transitions at generation
			interval: 7000, // interval between slides in milliseconds
			slideClass: '.slide', // the slide class
			slideNumClass: '.slide-#', // generates slide numbers, use # for the number placeholder
			slideIdAttr: 'data-slide-id', // the attribute for the slide id, e.g. data-slide-id="3"
			slideNameAttr: 'data-slide-name', // the attribute for the slide name (a unique text string), e.g. data-slide-name="SaleHalfOff"
			width: 980, // width of container
			height: 360, // height of container
			nav: { // nav options, set to false for no nav
				prev: true,
				next: true,
				start: false,
				stop: false,
				numbers: true,
				icons: false,
				position: 'after' // [before|inside|after]
			},
			currentNavClass: '.current', // the class of the selected nav item
			stopOnClick: true, // stop rotating on nav click
			loadingClassName: 'loading', // class name of loading class
			autostart: true, // whether or not to autostart rotation
			quickLoad: false, // load without waiting for images
			zIndex: 10, // z-index to start at
			//ieFadeFix: false, // IE has problems with complete black in fading images; DEPRECATED
			events: { // trigger events that are available
				onInit: function (data) { },
				onLoad: function (data) { },
				onFirstStart: function (data) { },
				onStart: function (data) { },
				onStop: function (data) { },
				onChange: function (data) { },
				onClick: function (data) { },
				onNavClick: function (data) { }
			},
			debug: false
		};
				// the rotators config based on passed in options
		var config = $.extend({}, defaults, options || {});

		// will hold the Rotator object
		var base = this;
	}())