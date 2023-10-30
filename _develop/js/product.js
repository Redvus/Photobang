/*====================================
=            Product Slider            =
====================================*/

function productSlider() {
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

const productImage = document.querySelector('.product-content__image'),
    productOptions = document.querySelector('.product-content__options'),
    productGallery = document.querySelector('.product-content__gallery_inside'),
    productViewIcon = document.getElementById('productViewIcon')
;

function productImageLook() {
    let tl = new gsap.timeline({
        reversed: true
    });

    tl
        .to([productImage, productOptions], {
            duration: 0.3,
            autoAlpha: 0
        })
        .from(productGallery, {
            duration: 0.2,
            delay: "-0.2",
            autoAlpha: 0,
            scale: 0.97
        })
    ;

    productViewIcon.addEventListener("click", () => {
        tl.play();
    });

    productGallery.addEventListener("click", () => {
        tl.reversed() ? tl.restart() : tl.reverse();
    });

    return tl;
}

function initMain() {
    productImageLook();
}

function initMainMobile() {

}

if (document.body.clientWidth > 820 || screen.width > 820) {
    initMain();
} else {
    initMainMobile();
}


