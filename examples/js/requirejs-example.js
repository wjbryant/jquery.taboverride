/*global require */

require.config({
    baseUrl: '.',
    // the modules are in different directories
    paths: {
        'jquery': 'lib/jquery-1.8.2.min',
        'taboverride': 'lib/taboverride-3.0.2.min',
        'jquery.taboverride': '../build/jquery.taboverride.min'
    }
});

// this code uses jQuery and the Tab Override jQuery plugin
require(['jquery', 'jquery.taboverride'], function ($) {
    'use strict';

    // get a reference to the textarea we want to enhance
    var $textarea = $('#txt');

    // toggle Tab Override when the checkbox value changes
    $('#tab_override_enabled')
        .change(function () {
            $textarea.tabOverride(this.checked);
        })
        .change(); // initialize

    // update the tab size setting when the number changes
    $('#tab_override_tab_size')
        .change(function () {
            $.fn.tabOverride.tabSize(parseInt(this.value, 10));
        })
        .change(); // initialize

    // toggle auto indent when the checkbox value changes
    $('#tab_override_auto_indent')
        .change(function () {
            $.fn.tabOverride.autoIndent(this.checked);
        })
        .change(); // initialize
});
