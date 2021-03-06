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

		// jQuery object vars available
		base.config = config;
		base.element;
		base.slides;
		base.nav;

		// holds the setInterval
		var timer = false;

		// holds the current slide
		var current;
			// the initiation of the rotator. gets all the slides, assigns classes, and adds nav
		var init = function () {
			// get the rotator element
			base.element = $(element).eq(0);
			base.id = base.element[0].id || base.element.attr({ id: (Date.now() + 1).toString(36) })[0].id;

			// get the slides
			base.slides = base.element.find(config.slideClass);

			// if starting random, generate a num
			if (config.random == true) {
				config.first = (Math.floor(Math.random() * 100) % base.slides.length) + 1;
			}
			// add the slide numbers
			var i = config.first,
				tmpSlides = [];
			base.slides.each(function () {
				if (i > base.slides.length) { i = 1; }
				tmpSlides[i - 1] = $(this).attr(config.slideIdAttr, i).addClass(config.slideNumClass.replace(/\#/, i).replace(/\./, ''))[0];
				i++;
			});
			// slides DOM reordering
			if (config.reorderSlides == true && config.random == true) {
				base.slides.remove();
				base.element.append(tmpSlides);
			}

			// recollect
			base.slides = $(tmpSlides);
			current = base.slides.eq(0).css({ zIndex: config.zIndex });
			
			// slides clicking event
			base.slides.find('a').click(function (e) {
				base.runEvent('onClick', { event: e });
			});
			// copy any transitions that are added
			config.transitions = $.extend(base.transitions, config.transitions);

			// add the nav
			if (!!config.nav && base.slides.length > 1) {
				buildNav();
			}

			// attach the Rotator to its element
			base.element.data('rotator', base);

			// init event
			base.runEvent('onInit');
			// when the first slide is done loading, show the rotator.
			var loadFn = function () {
				config.rotatorLoaded = true;
				base.element.removeClass(config.loadingClassName);

				config.events.onLoadDefault = function() {
					current.fadeIn(500);

					// fade in the nav
					if (base.nav) {
						base.nav.fadeIn();
					}
				};
				// if no onLoad event, run default loading event
				if (!options.events) {
					config.events.onLoadDefault();
				}
				else if (!options.events.onLoad) {
					config.events.onLoadDefault();
				};
						if (HAS_FILTER) return (function() {
		
			img.style.filter = [
				'progid:DXImageTransform.Microsoft.Matrix(M11="',
					cos,
				'", M12="',
					-sin,
				'", M21="',
					sin,
				'", M22="',
					cos,
				'", sizingMethod="auto expand")'
			].join('');
			
		})();
		
	};
	
})();
	}())