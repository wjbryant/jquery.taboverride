/*global exports, require, define, jQuery, tabOverride */

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
		factory( jQuery, tabOverride );
	}
}(function ( $, tabOverride ) {
	"use strict";

	var $fnTabOverride;

	/**
	 * Helper function to remove the delegated listeners. This is only used in
	 * the removeDelegatedListeners and addDelegatedListeners functions.
	 *
	 * @see jQuery.fn.tabOverride.removeDelegatedListeners
	 * @private
	 */
	function removeDelegatedListenersHelper( $container, selector ) {
		$container.off({
			"keydown.tabOverride": tabOverride.handlers.keydown,
			"keypress.tabOverride": tabOverride.handlers.keypress
		}, selector );
	}

	/**
	 * @see jQuery.fn.tabOverride.removeDelegatedListeners
	 * @private
	 */
	function removeDelegatedListeners( $container, selector ) {
		tabOverride.utils.executeExtensions( "removeDelegatedListeners", [ $container, selector ] );
		removeDelegatedListenersHelper( $container, selector );
	}

	/**
	 * @see jQuery.fn.tabOverride.addDelegatedListeners
	 * @private
	 */
	function addDelegatedListeners( $container, selector ) {
		tabOverride.utils.executeExtensions( "addDelegatedListeners", [ $container, selector ] );
		removeDelegatedListenersHelper( $container, selector );
		$container.on({
			"keydown.tabOverride": tabOverride.handlers.keydown,
			"keypress.tabOverride": tabOverride.handlers.keypress
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
	 * @param  {boolean} [enable=true]  whether Tab Override should be enabled
	 *                                  for the element(s)
	 * @param  {string}  [selector]     the selector string for delegated events
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

			tabOverride.utils.executeExtensions( "setDelegated", [ $container, selector, enable ] );

			if ( enablePlugin ) {
				addDelegatedListeners( $container, selector );
			} else {
				removeDelegatedListeners( $container, selector );
			}
		} else {
			// The jQuery object acts as an array of elements, so it can be passed
			// to tabOverride.set()
			tabOverride.set( this, enablePlugin );
		}

		// Return the jQuery object
		return this;
	};

	/**
	 * Namespace for utility functions
	 *
	 * @name utils
	 * @namespace
	 * @memberOf jQuery.fn.tabOverride
	 */
	$fnTabOverride.utils = {
		/**
		 * Adds the Tab Override event listeners to the container element using
		 * jQuery delegated events.
		 *
		 * @param {Object} $container  the jQuery object for the container element
		 * @param {string} selector    the selector string to use for the delegated events
		 *
		 * @function
		 * @memberOf jQuery.fn.tabOverride.utils
		 */
		addDelegatedListeners: addDelegatedListeners,

		/**
		 * Removes the Tab Override event listeners on the container element
		 * using jQuery delegated events.
		 *
		 * @param {Object} $container  the jQuery object for the container element
		 * @param {string} selector    the selector string to use for the delegated events
		 *
		 * @function
		 * @memberOf jQuery.fn.tabOverride.utils
		 */
		removeDelegatedListeners: removeDelegatedListeners
	};

	/**
	 * Gets or sets the tab size for all elements that have Tab Override enabled.
	 * 0 represents the tab character.
	 *
	 * @param  {number}          [size]  the tab size
	 * @return {number|Function}         the tab size or the tabOverride function
	 *
	 * @name tabSize
	 * @function
	 * @memberOf jQuery.fn.tabOverride
	 */
	$fnTabOverride.tabSize = tabOverride.tabSize;

	/**
	 * Gets or sets the auto indent setting. True if each line should be
	 * automatically indented (default = false).
	 *
	 * @param  {boolean}          [enable]  whether auto indent should be enabled
	 * @return {boolean|Function}           whether auto indent is enabled or the
	 *                                      tabOverride function
	 *
	 * @name autoIndent
	 * @function
	 * @memberOf jQuery.fn.tabOverride
	 */
	$fnTabOverride.autoIndent = tabOverride.autoIndent;

	/**
	 * Gets or sets the tab key combination.
	 *
	 * @param  {number}          keyCode             the key code of the key to use for tab
	 * @param  {string[]}        [modifierKeyNames]  the modifier key names - valid names are
	 *                                               'alt', 'ctrl', 'meta', and 'shift'
	 * @return {string|Function}                     the current tab key combination or the
	 *                                               tabOverride function
	 *
	 * @name tabKey
	 * @function
	 * @memberOf jQuery.fn.tabOverride
	 */
	$fnTabOverride.tabKey = tabOverride.tabKey;

	/**
	 * Gets or sets the untab key combination.
	 *
	 * @param  {number}          keyCode             the key code of the key to use for untab
	 * @param  {string[]}        [modifierKeyNames]  the modifier key names - valid names are
	 *                                               'alt', 'ctrl', 'meta', and 'shift'
	 * @return {string|Function}                     the current untab key combination or the
	 *                                               tabOverride function
	 *
	 * @name untabKey
	 * @function
	 * @memberOf jQuery.fn.tabOverride
	 */
	$fnTabOverride.untabKey = tabOverride.untabKey;
}));
