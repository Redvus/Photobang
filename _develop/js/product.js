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

function productImageLook() {
    const productImage = document.querySelector('.product-content__image');

    productImage.addEventListener("mouseenter", () => {
        gsap.to(productImage, {
            duration: 0.3,
            autoAlpha: 0
        });
    });

    productImage.addEventListener("mouseleave", () => {
        gsap.to(productImage, {
            duration: 0.3,
            autoAlpha: 1
        });
    });
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


