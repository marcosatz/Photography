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
            $('.sticky-nav-menu').css({'display' : 'block'});

        } else if ($(window).width() < 768) {
            $('.header-left').css({'display' : 'none'});
            $('.sticky-nav-menu').css({'display' : 'none'});
        }
    });

    $(function() {
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $('.header-bottom').fadeIn();
                if ($(window).width() < 768) {
                    $('.header-left').fadeOut();
                }
            } else {
                $('.header-bottom').fadeOut();
                if ($(window).width() < 768) {
                    $('.sticky-nav-menu').fadeOut();
                }
            }
        });
    });

    $('.btn-menu').click(function() {
        $('.header-left').toggle('fade', {direction: 'bottom'}, 500);
    });

    $('.btn-menu-bottom').click(function() {
        $('.sticky-nav-menu').toggle('fade', {direction: 'bottom'}, 500);
    });


    // Section Hero
    $('.your-class').slick({
        dots: true,
        autoplay: true,
        arrows: false,
        fade: true,
        speed: 2000,
    });

    //falow us
    // $('.icon-fixed').hover(function() {
    //     $(this).toggle('slide', {direction: 'rigt'}, 500);
    // });
});