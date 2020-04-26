$(document).ready(function () {
    
    //RESPONSIVE SCROLL DOWN
    if ($(window).width() <= 800) {
        let offsetResp = -50;

        //SCROLL DOWN ON href="#....." TO THE SAME ID +++++ OFFSET (-50PIXEL to dont have title hidden unter fixed header!!!)
        $('a[href^="#"]').click(function () {
            let the_id = $(this).attr("href");

            $('html, body').animate({
                scrollTop: $(the_id).offset().top + offsetResp
            }, 1600);
            return false;
        });

        //SCROLL DOWN ON #navListe
        $('a[href^="#navListe"]').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });

        
    //NORMAL SCROLL DOWN
    } else {
        //SCROLL DOWN ON href="#....." TO THE SAME ID
        $('a[href^="#"]').click(function () {
            let the_id = $(this).attr("href");

            $('html, body').animate({
                scrollTop: $(the_id).offset().top
            }, 1600);
            return false;
        });

        //SCROLL DOWN ON #navListe
        $('a[href^="#navListe"]').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });
    }

});
