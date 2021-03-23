$(document).ready(function() {

        $('nav ul li').stop().hover(
            function() {
                $(this).children('ul').stop().slideDown(500);
            },
            function() {
                $(this).children('ul').stop().slideUp(500);
            }
        );
});
