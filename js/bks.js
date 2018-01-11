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

    // slide show
    // var slideIndex = 0;
    // autoSlides();
    // function autoSlides() {
    //     showSlides(slideIndex);
    //     setTimeout(autoSlides, 6000);
    //     slideIndex++;
    // }
    // function showSlides(n) {
    //     var i;
    //     var slides = $(".slide");
    //     if (n >= slides.length) { slideIndex = 0 }
    //     if (n < 0) { slideIndex = slides.length - 1 }
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     slides[slideIndex].style.display = "block";
    // }
    // $('.next').click(function () {
    //     showSlides(slideIndex += 1);
    // });
    // $('.prev').click(function () {
    //     showSlides(slideIndex -= 1);
    // });
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
    // auto complete
});