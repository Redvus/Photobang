// (function ($) {




    /*========================================
    =            Front Navigation            =
    ========================================*/

    function frontNavigationClick() {
        $('#category_front li').click(function() {

            var tl = new TimelineMax();

            tl
                .staggerTo(this, 0.8, {
                    xPercent: 20,
                    autoAlpha: 0,
                    ease: Power3.easeInOut
                }, 0.15)
                .to($('.front-content__slider'), 1, {
                    xPercent: -20,
                    autoAlpha: 0,
                    ease: Power3.easeInOut
                }, "-=1.2")
                .to($('.wrapper-front'), 0.6, {
                    autoAlpha: 0,
                    ease: Power3.easeInOut
                }, "-=1")
            ;
            return tl;
        });
    }

    // frontNavigationClick();


    /*=====  End of Front Navigation  ======*/

// })(jQuery);

/*====================================
=            Front Slider            =
====================================*/

function frontSlider() {
    let sliderFront = new MasterSlider();
    sliderFront.control('arrows' ,{insertTo:'#slider_arrow_front',autohide:false});
    // sliderFront.control('slideinfo',{insertTo:'#[[+galleryScriptInfo]]'});

    sliderFront.setup('slider_front' , {
        width: 730,
        height: 880,
        autoHeight: false,
        space: 0,
        loop: true,
        view:'flow',
        layout:'autofill', //fullscreen
        speed:20,
    });
}
/*=====  End of Front Slider  ======*/

function initMain() {
    frontSlider();
}

function initMainMobile() {

}

if (document.body.clientWidth > 820 || screen.width > 820) {
    initMain();
} else {
    initMainMobile();
}


