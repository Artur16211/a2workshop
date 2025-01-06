$(document).ready(function () {
    $('.megamenu > a').on('click', function (e) {
        e.preventDefault();
        $('.megamenu-content').fadeIn();
    });

    $('.close-btn').on('click', function () {
        $('.megamenu-content').fadeOut();
    });
});