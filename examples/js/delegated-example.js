/*global jQuery */

jQuery(function ($) {
    'use strict';

    // get a reference to the container element
    var $container = $('body');

    // toggle Tab Override when the checkbox value changes
    $('#tab_override_enabled')
        .change(function () {
            $container.tabOverride(this.checked, 'textarea');
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

    // add a new textarea element to the page when the "add" button is clicked
    $('#add_textarea').click(function () {
        $container.append($('<textarea>'));
    });
});
