$(document).ready(function() {
    function animateOnScroll() {
        $('.animate-up').each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 50) {
                $(this).addClass('visible');
            }
        });
    }

    animateOnScroll();
    $(window).on('scroll', animateOnScroll);
});