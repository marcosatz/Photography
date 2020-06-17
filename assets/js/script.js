$(document).ready(function() {
    $('.search-icon').click(function() {
        $('.search-form').fadeToggle();
    })
    $('body').click(function() {
        $('.search-form').fadeOut();
    })

    $('.search-bar').click(function(e) {
        e.stopPropagation();
    });

    $(window).on('resize', function() {
        if ($(window).width() >= 768) {
            $('.header-left').css({'display' : 'flex'});

        } else if ($(window).width() < 768) {
            $('.header-left').css({'display' : 'none'});
        }
    });

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 140) {
            // $('.header-bottom').css({ 'display' : 'block'});
            $('.header-bottom').fadeIn();
        } else {
            // $('.header-bottom').css({ 'display' : 'none'});
            $('.header-bottom').fadeOut();
        }
    });

    $('.btn-menu').click(function() {
        $('.header-left').toggle('fade', {direction: 'bottom'}, 500);
    });
});