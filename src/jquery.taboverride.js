/*jslint white: true */
/*jshint white: false */
/*global define, jQuery, TABOVERRIDE */

/**
 * the global jQuery object
 *
 * @name jQuery
 * @namespace
 */

/**
 * the jQuery function "namespace"
 *
 * @name fn
 * @namespace
 * @memberOf jQuery
 */

// Use AMD if available
(function ( factory ) {
    "use strict";

    if ( typeof define === "function" && define.amd ) {
        // AMD - Register as a named module
        // Using a named module allows for non-AMD-aware concatenation
        define( "jquery.taboverride", [ "jquery", "taboverride" ], factory );
    } else {
        // No AMD - Use global variables instead
        factory( jQuery, TABOVERRIDE );
    }
}(function ( $, TABOVERRIDE ) {
    "use strict";

    /**
     * the tabOverride method - Tabs will be overridden if enable is true.
     *
     * @param  {Boolean} [enable=true]  whether Tab Override should be enabled
     *                                  for the element(s)
     * @return {Object}                 the jQuery object
     *
     * @name tabOverride
     * @memberOf jQuery.fn
     * @function
     * @namespace
     */
    var tabOverride = $.fn.tabOverride = function ( enable ) {

        // The jQuery object acts as an array of elements, so it can be passed
        // to TABOVERRIDE.enable() or TABOVERRIDE.disable().
        // If there are no arguments or enable is truthy, enable Tab Override,
        // otherwise, disable it.
        TABOVERRIDE.set( this, !arguments.length || enable );

        // Return the jQuery object
        return this;
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
    tabOverride.tabSize = TABOVERRIDE.tabSize;

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
    tabOverride.autoIndent = TABOVERRIDE.autoIndent;
}));
