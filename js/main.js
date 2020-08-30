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

//MODAL FOOTER
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

//modal footer slide
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}