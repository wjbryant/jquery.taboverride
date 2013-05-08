/*global exports, require, define, jQuery, TABOVERRIDE */

/**
 * the global jQuery object
 *
 * @name jQuery
 * @namespace
 */

/**
 * the jQuery prototype shortcut "namespace"
 *
 * @name fn
 * @namespace
 * @memberOf jQuery
 */

// Use CommonJS or AMD if available
(function ( factory ) {
	"use strict";

	if ( typeof exports === "object" && typeof require === "function" ) {
		// Node.js/CommonJS
		factory( require( "jquery" ), require( "taboverride" ) );
	} else if ( typeof define === "function" && define.amd ) {
		// AMD - Register as an anonymous module
		// Files must be concatenated using an AMD-aware tool such as r.js
		define( [ "jquery", "taboverride" ], factory );
	} else {
		// No module format - Use global variables instead
		factory( jQuery, TABOVERRIDE );
	}
}(function ( $, TABOVERRIDE ) {
	"use strict";

	var delegatedExtensions = [],
		$fnTabOverride;

	function removeDelegatedListeners( $container, selector ) {
		$container.off({
			"keydown.tabOverride": TABOVERRIDE.handlers.keydown,
			"keypress.tabOverride": TABOVERRIDE.handlers.keypress
		}, selector );
	}

	function addDelegatedListeners( $container, selector ) {
		removeDelegatedListeners( $container, selector );
		$container.on({
			"keydown.tabOverride": TABOVERRIDE.handlers.keydown,
			"keypress.tabOverride": TABOVERRIDE.handlers.keypress
		}, selector );
	}

	/**
	 * the tabOverride method "namespace"
	 *
	 * @name tabOverride
	 * @namespace
	 * @memberOf jQuery.fn
	 */

	/**
	 * Enables/disables Tab Override. If enabled, tabs (or spaces) will be
	 * inserted in the selected textarea elements when the tab key is pressed.
	 *
	 * @param  {Boolean} [enable=true]  whether Tab Override should be enabled
	 *                                  for the element(s)
	 * @param  {String}  [selector]     the selector string for delegated events
	 * @return {Object}                 the jQuery object
	 *
	 * @name "tabOverride"
	 * @function
	 * @memberOf jQuery.fn
	 */
	$fnTabOverride = $.fn.tabOverride = function ( enable, selector ) {

		var enablePlugin = !arguments.length || enable,
			isDelegated = typeof selector === "string",
			$container;

		if ( isDelegated ) {
			$container = this;

			// Allow extensions for delegated events
			$.each( delegatedExtensions, function () {
				this( $container, selector, enable );
			});

			if ( enablePlugin ) {
				addDelegatedListeners( $container, selector );
			} else {
				removeDelegatedListeners( $container, selector );
			}
		} else {
			// The jQuery object acts as an array of elements, so it can be passed
			// to TABOVERRIDE.set()
			TABOVERRIDE.set( this, enablePlugin );
		}

		// Return the jQuery object
		return this;
	};

	$fnTabOverride.utils = {
		addDelegatedListeners: addDelegatedListeners,
		removeDelegatedListeners: removeDelegatedListeners
	};

	/**
	 * Adds an extension function for delegated events.
	 *
	 * @name addDelegatedExtension
	 * @memberOf jQuery.fn.tabOverride
	 */
	$fnTabOverride.addDelegatedExtension = function (func) {
		if ($.isFunction(func)) {
			delegatedExtensions.push(func);
		}
	};

	/**
	 * Gets or sets the tab size for all elements that have Tab Override enabled.
	 * 0 represents the tab character.
	 *
	 * @param  {Number}          [size]  the tab size
	 * @return {Number|Function}         the tab size or the tabOverride function
	 *
	 * @name tabSize
	 * @function
	 * @memberOf jQuery.fn.tabOverride
	 */
	$fnTabOverride.tabSize = TABOVERRIDE.tabSize;

	/**
	 * Gets or sets the auto indent setting. True if each line should be
	 * automatically indented (default = false).
	 *
	 * @param  {Boolean}          [enable]  whether auto indent should be enabled
	 * @return {Boolean|Function}           whether auto indent is enabled or the
	 *                                      tabOverride function
	 *
	 * @name autoIndent
	 * @function
	 * @memberOf jQuery.fn.tabOverride
	 */
	$fnTabOverride.autoIndent = TABOVERRIDE.autoIndent;

	/**
	 * Gets or sets the tab key combination.
	 *
	 * @param  {Number}          keyCode             the key code of the key to use for tab
	 * @param  {String[]}        [modifierKeyNames]  the modifier key names - valid names are
	 *                                               'alt', 'ctrl', 'meta', and 'shift'
	 * @return {String|Function}                     the current tab key combination or the
	 *                                               tabOverride function
	 *
	 * @name tabKey
	 * @function
	 * @memberOf jQuery.fn.tabOverride
	 */
	$fnTabOverride.tabKey = TABOVERRIDE.tabKey;

	/**
	 * Gets or sets the untab key combination.
	 *
	 * @param  {Number}          keyCode             the key code of the key to use for untab
	 * @param  {String[]}        [modifierKeyNames]  the modifier key names - valid names are
	 *                                               'alt', 'ctrl', 'meta', and 'shift'
	 * @return {String|Function}                     the current untab key combination or the
	 *                                               tabOverride function
	 *
	 * @name untabKey
	 * @function
	 * @memberOf jQuery.fn.tabOverride
	 */
	$fnTabOverride.untabKey = TABOVERRIDE.untabKey;
}));
