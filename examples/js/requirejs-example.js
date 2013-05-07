/*global require */

require.config({
    baseUrl: '.',
    // the modules are in different directories
    paths: {
        'jquery': 'lib/jquery-1.9.1.min',
        'taboverride': 'lib/taboverride-3.3.0-dev.min',
        'jquery.taboverride': '../build/jquery.taboverride.min'
    }
});

// this code uses jQuery and the Tab Override jQuery plugin
require(['jquery', 'jquery.taboverride'], function ($) {
    'use strict';

    // enhance the textarea with Tab Override
    $('#txt').tabOverride();
});
