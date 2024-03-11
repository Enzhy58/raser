$(function () {

    $('.news__list, .gear__list').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icon/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icon/arrow-next.svg" alt=""></button>'
    });
    $('.exclusive__list').slick({
        slidesToShow: 4,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icon/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icon/arrow-next.svg" alt=""></button>'
    });

    $(".star__img").rateYo({
        maxValue: 1,
        numStars: 1,
        starWidth: "18px",
        starHeight: "17px",
        ratedFill: "#F2C94C"
    });



});