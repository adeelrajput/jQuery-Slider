$(function () {
    $('.previous').on('click', function () {
        //before image previous
        if ($('img:first-child').hasClass('before-img')) {
            $('img.before-img').removeClass('before-img').prev($('.before img:last-child').addClass('before-img'));
            // console.log('working previous');
        }
        else {
            $('img.before-img').removeClass('before-img').prev().addClass('before-img');
            // console.log('working previous else');
        }
        // Center imgage previous
        if ($('img:first-child').hasClass('center-img')) {
            $('img.center-img').removeClass('center-img').prev($('.center img:last-child').addClass('center-img'));
            // console.log('working previous');
        }
        else {
            $('img.center-img').removeClass('center-img').prev().addClass('center-img');
            // console.log('working previous else');
        }
        //after image previous
        if ($('img:first-child').hasClass('after-img')) {
            $('img.after-img').removeClass('after-img').prev($('.after img:last-child').addClass('after-img'));
            // console.log('working previous');
        }
        else {
            $('img.after-img').removeClass('after-img').prev().addClass('after-img');
            // console.log('working previous else');
        }
    });
    $('.next').on('click', function () {
        //before image next
        if ($('.before img:last-child').hasClass('before-img')) {
            $('.before img').removeClass('before-img').next($('.before img:first-child').addClass('before-img'));
            // console.log('working previous');
        }
        else {
            $('img.before-img').removeClass('before-img').next().addClass('before-img');
            // console.log('working previous else');
        }
        //Center image next
        if ($('.center img:last-child').hasClass('center-img')) {
            $('.center img').removeClass('center-img').next($('.center img:first-child').addClass('center-img'));
            // console.log('working next')
        }
        else {
            $('img.center-img').removeClass('center-img').next().addClass('center-img');
            // console.log('working next else');
        }
        //after image next
        if ($('.after img:last-child').hasClass('after-img')) {
            $('img.after-img').removeClass('after-img').next($('.after img:first-child').addClass('after-img'));
            // console.log('working previous');
        }
        else {
            $('img.after-img').removeClass('after-img').next().addClass('after-img');
            // console.log('working previous else');
        }
    });
});
//# sourceMappingURL=slider.js.map