$(document).ready(function () {
   $('.box-required-login i').click(function () {
      $('.box-required-login').hide();
   });
});

$(document).ready(function () {

    $('.navbar-brand.logo').click(function () {
        $('.top-menu > ul > li > a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
    });

    $('.top-menu > ul > li > a').click(function () {
        $('.top-menu > ul > li > a').each(function () {
            $(this).removeClass('active');
        });
        $('.navbar-brand.logo').removeClass('active');
       $(this).addClass('active');
    });

});