//fixid menu on scroll
$(window).on('scroll', function() {
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
    cellAlign: 'left'
});
// Flickity instance
    var flkty = $carousel.data('flickity');
  // elements
  var $cellButtonGroup = $('.button-group--cells');
  var $cellButtons = $cellButtonGroup.find('.button');

  // update selected cellButtons
  $carousel.on('select.flickity', function () {
      $cellButtons.filter('.is-selected')
          .removeClass('is-selected');
      $cellButtons.eq(flkty.selectedIndex)
          .addClass('is-selected');
  });

  $cellButtonGroup.on('click', '.button', function () {
      var index = $(this).index();
      $carousel.flickity('select', index);
  });

  $(' .button--previous').on('click', function () {
      $carousel.flickity('previous');
  });
  $(' .button--next').on('click', function () {
      $carousel.flickity('next');
  });