"use strict";

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

$('a[href*="#"]').click(function(event) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
                return false;
            } else {
                $target.attr('tabindex','-1');
                $target.focus();
            };
        });
    }
});



// $(window).on("scroll", function () {
//     $('#header').html("<h1 class='tiny-header-text'>Hello. I'm Emily Rodriguez</h1>").toggleClass('tiny', $(document).scrollTop() > 0);
// });


