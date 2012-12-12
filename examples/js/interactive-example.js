/*global jQuery */

// on DOM ready
jQuery(function ($) {
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

    // toggle custom key combinations
    $('#tab_override_alt_keys')
        .change(function () {
            if (this.checked) {
                $.fn.tabOverride.tabKey(221, ['ctrl']).untabKey(219, ['ctrl']);
            } else {
                $.fn.tabOverride.tabKey(9).untabKey(9, ['shift']);
            }
            //console.log($.fn.tabOverride.tabKey());
            //console.log($.fn.tabOverride.untabKey());
        })
        .change(); // initialize
});
