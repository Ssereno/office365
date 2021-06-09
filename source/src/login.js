(function () {
    'use strict';

    // Office.initialize must be called on every page where Office JavaScript is
    // called. Other initialization code should go inside it.
    Office.initialize = function () {
        $(document).ready(function () {
            Office.context.ui.messageParent(window.location.hash);
        });
    }
}());
