$(document).ready(function(e) {

        $('nav ul li').stop().hover(
            function(e) {
                $(this).children('ul').stop().slideDown(500);
            },
            function(e) {
                $(this).children('ul').stop().slideUp(500);
            }
        );
});
