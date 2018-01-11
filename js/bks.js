$(document).ready(function () {
    // overfollow menu
    $('#expand a').click(function () {
        $(this).next().slideToggle(1000);
        $(this).find(">:first-child").toggleClass("fa-caret-up");
    });
    var isMenuOpen = true;
    $('#menu-toggle').click(function () {
        if (isMenuOpen) {
            $('.side-bar').css('margin-left', '-40%');
            $('.content-main').width('100%');
            isMenuOpen = false;
        } else {
            $('.side-bar').css('margin-left', '0');
            $('.content-main').width('80%');
            isMenuOpen = true;
        }
    });

    // sticky menu
    $("#sticky-menu").sticky({ topSpacing: 0 });

    //slide show
    $('.slideshow-container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    });
    // back to top
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    $("#credit-card").hide();
    $("#visa").hide();
    $("#gift").hide();
    // auto complete
    $("input").on("click", function () {
        $("input[name='checkout']").each(function () {
            if ($(this).is(':checked')) {
                if ($(this).val() == 2) {
                    $("#credit-card").show();
                    $("#visa").hide();
                }
                else if ($(this).val() == 4) {
                    $("#visa").show();
                    $("#credit-card").hide();
                } else {
                    $("#credit-card").hide();
                    $("#visa").hide();
                }
            }
        });
        $("input[name='service']").each(function () {
            if ($(this).is(':checked')){
                if ($(this).val() == 1) {
                    $("#gift").show();
                }
            }else {
                if ($(this).val() == 1) {
                    $("#gift").hide();
                }
            }
        });
    });
});