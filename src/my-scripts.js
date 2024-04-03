$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    if (wScroll > $('.my-project').offset().top - $(window).height() / 0,5) { // Saat elemen hampir berada di tengah layar
        $('.my-project .navbar-2').each(function(i) {
            setTimeout(function () {
                $('.my-project .navbar-2').eq(i).addClass('muncul');
            },900 * (i+1));
        })
    }
});
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    if (wScroll > $('.my-certificate').offset().top - $(window).height() / 3) { // Saat elemen hampir berada di tengah layar
        $('.my-certificate .navbar-3').each(function(i) {
            setTimeout(function () {
                $('.my-certificate .navbar-3').eq(i).addClass('muncul');
            },900 * (i+1));
        })
    }
});


