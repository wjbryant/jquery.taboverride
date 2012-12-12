/*global jQuery */

// on DOM ready
jQuery(function ($) {
    'use strict';

    // get a reference to the container element
    var $container = $('body');

    // enable Tab Override for all textareas
    $container.tabOverride(true, 'textarea');

    // add a new textarea element to the page when the "add" button is clicked
    $('#add_textarea').click(function () {
        $container.append($('<textarea>'));
    });
});
