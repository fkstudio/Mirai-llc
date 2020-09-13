//fixid menu on scroll
$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll <= 153) {
        $('.main-nav').removeClass('fixed');
    } else {
        $(".main-nav").removeClass("active");
        $('.main-nav').addClass('fixed');
    }
});

var $carousel = $('.homeslide').flickity({
    prevNextButtons: false,
    pageDots: false,
    cellAlign: 'left',
    // autoPlay: true
});