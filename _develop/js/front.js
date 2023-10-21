(function ($) {




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

    frontNavigationClick();


    /*=====  End of Front Navigation  ======*/


    /*====================================
    =            Front Slider            =
    ====================================*/

    var sliderFront = new MasterSlider();
    sliderFront.control('arrows' ,{insertTo:'#slider_arrow_front',autohide:false});
    // sliderFront.control('slideinfo',{insertTo:'#[[+galleryScriptInfo]]'});

    sliderFront.setup('slider_front' , {
        width: 730,
        height: 880,
        autoHeight: false,
        space: 0,
        loop: true,
        view:'flow',
        layout:'fillscreen', //fullscreen
        speed:20,
//         grabCursor: false,
//      swipe: false,
//      mouse: false
    });

    /*=====  End of Front Slider  ======*/


})(jQuery);