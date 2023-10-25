// (function ($) {
//
//
//
//     /*==================================
//     =            Cookie 18+            =
//     ==================================*/
//
//     var permissionBlock = $('#permissionBlock'),
//         permissionWindow =$('#permissionWindow'),
//         permissionClose = $('#permissionClose'),
//         permissionText = $('#permissionText'),
//         permissionButton = $('#permissionButton'),
//         permissionAlert = $('#permissionAlert')
//     ;
//
//     function cookieFront() {
//
//         if (!$.cookie('was')) {
//
//             permissionBlock.removeClass('permission-hidden');
//
//         }
//
//         $.cookie('was', true, {
//             expires: 7,
//             path: '/'
//         });
//
//     }
//
//     function permissionFront() {
//
//         permissionButton.on('click', function () {
//
//             function permissioEnter() {
//
//                 var tl = new TimelineMax();
//
//                 tl
//                     .to(permissionWindow, 1.2, {
//                         y: '-100%',
//                         autoAlpha: 0,
//                         ease: Back.easeInOut
//                     })
//                     .to(permissionBlock, 0.6, {
//                         autoAlpha: 0,
//                         ease: Power1.easeInOut
//                     }, "-=0.6")
//                     .set(permissionBlock, {
//                         className: "+=permission-hidden"
//                     })
//                 ;
//
//             }
//             permissioEnter();
//
//         });
//
//         function permissioAlert() {
//
//             var tl = new TimelineMax({reversed:true});
//
//             tl
//                 .to(permissionButton, 0.4, {
//                     autoAlpha: 0,
//                     ease: Power1.easeInOut
//                 })
//                 .to(permissionText, 0.4, {
//                     autoAlpha: 0,
//                     ease: Power1.easeInOut
//                 }, '-=0.4')
//                 .to(permissionAlert, 0.4, {
//                     autoAlpha: 1,
//                     ease: Power1.easeInOut
//                 })
//             ;
//
//             permissionClose.click(function () {
//                 tl.reversed() ? tl.restart() : tl.reverse();
//             });
//             return tl;
//
//         }
//         permissioAlert();
//
//     }
//     permissionFront();
//     cookieFront();
//
//     /*=====  End of Cookie 18+  ======*/
//
//

//
//
//     /*==============================
//     =            Search            =
//     ==============================*/
//
//     var searchToggle = $("#searchToggle"),
//         searchBlock = $("#searchBlock"),
//         searchBack = $("#searchBack"),
//         searchClose = $(".search-close"),
//         searchForm = $("#mse2_form"),
//         searchIcon = $("#searchIcon"),
//         searchBottle = $("#searchBottle"),
//         searchMagnifier = $("#searchMagnifier"),
//         searchCross = $("#searchCross"),
//         searchForm = $(".form-search__input"),
//         searchIconOver = $("#searchIconOver"),
//         searchBlockHelp = $('#searchBlockHelp'),
//         searchMobileClose = $("#searchMobileClose"),
//         searchBlockMobile = $("#searchBlockMobile"),
//         searchToggleMobile = $("#searchToggleMobile")
//     ;
//
//     // TweenMax.set(rightBlock, {className: "+=search-back--hidden"});
//
//     if($(window).width() > 420 || screen.width > 420) {
//
//         function searchBottom() {
//
//             var tl = new TimelineMax({reversed:true, paused:true});
//
//             tl
//                 .to(searchBlock, 0.8, {
//                     bottom: "0",
//                     ease: Power2.easeInOut
//                 }, "-=0.2")
//                 .to(searchIcon, 0.6, {
//                     autoAlpha: "0",
//                     ease: Power2.easeInOut
//                 }, "-=0.6")
//                 .from(searchClose, 1, {
//                     autoAlpha: "0",
//                     y: "100%",
//                     rotation: "180",
//                     ease: Back.easeInOut
//                 }, "-=0.6")
//                 .from(searchBlockHelp, 1, {
//                     autoAlpha: "0",
//                     y: "100%",
//                     ease: Back.easeInOut
//                 }, "-=0.8")
//                 // .to(navToggle, 0.6, {
//                 //     zIndex: "9400",
//                 //     ease: Power1.easeInOut
//                 // }, "-=0.3")
//                 // .from(searchForm, 0.6, {
//                 //     autoAlpha: "0",
//                 //     ease: Power2.easeInOut
//                 // }, "-=0.9")
//                 // .to(searchIconBack, 0.8, {x: -15, autoAlpha: 0, ease: Back.easeInOut}, "-=1.2")
//                 // .to(searchBack, 0.8, {
//                 //     // autoAlpha: "0.7",
//                 //     x: "0",
//                 //     ease: Power2.easeInOut
//                 // }, "-=0.9")
//                 // .to(searchBack, 0.6, {
//                 //     y: "100%",
//                 //     autoAlpha: "0",
//                 //     ease: Power2.easeInOut
//                 // }, "-=0.9")
//                 // .set(rightToggle, {className: "right-toggle--open"})
//                 // .to(searchCross, 0.6, {
//                 //     scale: "1",
//                 //     autoAlpha: "1",
//                 //     ease: Power2.easeInOut
//                 // }, "-=0.6")
//             ;
//
//             searchToggle.on("click", function () {
//                 tl.reversed() ? tl.restart() : tl.reverse();
//             });
//             searchClose.on("click", function () {
//                 tl.reversed() ? tl.restart() : tl.reverse();
//             });
//
//             return tl;
//         }
//
//     } else {
//
//         function searchBottomMobile() {
//
//             var tl = new TimelineMax({reversed:true, paused:true});
//
//             tl
//                 .to(searchBlockMobile, 0.6, {
//                     y: "0",
//                     ease: Expo.easeInOut
//                 }, "-=0.2")
//                 .to(searchMobileClose, 0.4, {
//                     autoAlpha: "1",
//                     ease: Power2.easeInOut
//                 }, "-=0.4")
//             ;
//
//             searchToggleMobile.on("click", function () {
//                 tl.reversed() ? tl.restart() : tl.reverse();
//             });
//
//             return tl;
//         }
//     }
//
//     searchBottom();
//
//     /*=====  End of Search  ======*/
//
//     /*================================
//     =            MiniCart            =
//     ================================*/
//
//     var miniCartToggle = $('.mini-cart'),
//         miniCartContent = $('#miniCartContent'),
//         miniCartBack = $('#cart_back_svg'),
//         miniCartIcon = $('.miniCartIcon'),
//         miniCartCount = $('.ms2_total_count'),
//         miniCartClose = $('.minicart-close'),
//         miniCartLink = $('#miniCartLink'),
//         minicartFull = $('#minicartFull'),
//         minicartFilter = $('.category-filter')
//     ;
//
//     function miniCartRight() {
//
//         var tl = new TimelineMax({reversed:true, paused:true});
//
//         tl
//             .to(miniCartContent, 0.6, {
//                 right: 0,
//                 zIndex: 100,
//                 ease: Power1.easeInOut
//             }, "-=0.6")
//             .to(miniCartToggle, 0.6, {
//                 zIndex: "1",
//                 autoAlpha: "0",
//                 ease: Back.easeInOut
//             }, "-=0.6")
//             .to(minicartFilter, 0.6, {
//                 autoAlpha: "0",
//                 ease: Power1.easeInOut
//             }, "-=0.6")
//             .to(miniCartLink, 0.6, {
//                 display: "flex",
//                 ease: Power1.easeInOut
//             }, "-=0.6")
//             .to(miniCartIcon, 0.4, {
//                 autoAlpha: "0",
//                 ease: Back.easeInOut
//             }, "-=0.8")
//             .to(miniCartCount, 0.4, {
//                 autoAlpha: "0",
//                 ease: Back.easeInOut
//             }, "-=0.6")
//             .to(miniCartClose, 0.4, {
//                 autoAlpha: "1",
//                 zIndex: "2",
//                 ease: Back.easeInOut
//             }, "-=0.4")
//             // .to(miniCartLink, 1, {
//             //     autoAlpha: "1",
//             //     x: "-50%",
//             //     ease: Back.easeInOut
//             // }, "-=0.8")
//         ;
//
//         minicartFull.on("click", function () {
//             tl.reversed() ? tl.restart() : tl.reverse();
//         });
//         miniCartClose.on("click", function () {
//             tl.reversed() ? tl.restart() : tl.reverse();
//         });
//
//         return tl;
//
//     }
//
//     miniCartRight();
//
//     /*=====  End of MiniCart  ======*/
//
//     /*=====================================
//     =            Filter Mobile            =
//     =====================================*/
//
//     var filterMobile = $('#filterMobile'),
//         categoryFilter = $('.category-filter'),
//         categoryGrid = $('.category-grid'),
//         vendorDescription = $('.vendor-description'),
//         vendorDescriptionText = $('.vendor-description__text'),
//         filterBackMobile = $('#filterBackMobile'),
//         headerTopMobile = $('.header-top'),
//         headerLeftMobile = $('.header-left'),
//         headerRightMobile = $('.header-right'),
//         headerBottomMobile = $('.header-bottom'),
//         headerLogoMobile = $('.header-logo'),
//         miniCartMobile = $('.mini-cart'),
//         categoryFilterClose = $('.category-filter__close')
//     ;
//
//     if($(window).width() < 420 || screen.width < 420) {
//
//         function filterCategoryMobile() {
//
//             var tl = new TimelineMax({reversed:true, paused:true});
//
//             tl
//                 .to(categoryFilter, 0.6, {
//                     right: "0",
//                     zIndex: 9999,
//                     ease: Power2.easeInOut},
//                     "-=0.4")
//                 .to(filterBackMobile, 0.6, {
//                     zIndex: 8000,
//                     autoAlpha: 0.5,
//                     ease: Power1.easeInOut},
//                     "-=0.6")
//                 .to([searchBlockMobile, filterMobile, headerLogoMobile, navToggleMobile, headerTopMobile, headerBottomMobile, headerLeftMobile, headerRightMobile, vendorDescription], 0.3, {
//                     autoAlpha: "0",
//                     display: "none",
//                     ease: Power1.easeInOut},
//                     "-=0.6")
//                 .from(categoryFilterClose, 0.4, {
//                     autoAlpha: "0",
//                     ease: Power1.easeInOut})
//             ;
//
//             filterMobile.click(function () {
//                 tl.reversed() ? tl.restart() : tl.reverse();
//             });
//             filterBackMobile.click(function () {
//                 tl.reverse();
//             });
//             categoryFilterClose.click(function () {
//                 tl.reverse();
//             });
//
//             return tl;
//         }
//
//     }
//
//     filterCategoryMobile();
//
//     /*=====  End of Filter Mobile  ======*/
//
//     /*======================================
//     =            InfoNav Mobile            =
//     ======================================*/
//
//     var infoSidebar = $('#infoSidebar'),
//         infoNavMobile = $('#infoNavMobile'),
//         infoContent = $('#infoContent'),
//         infoActiveLink = $('#infoSidebar ul li'),
//         infoNavClose = $('#infoNavClose')
//     ;
//
//     if($(window).width() < 420 || screen.width < 420) {
//
//         function infoContentMobile() {
//
//             var tl = new TimelineMax({reversed:true, paused:true});
//
//             tl
//                 .to(infoSidebar, 0.6, {
//                     right: 0,
//                     zIndex: 9900,
//                     ease: Power1.easeInOut},
//                     "-=0.4")
//                 // .to(infoNavMobile, 0.3, {
//                 //     autoAlpha: "0",
//                 //     display: "none",
//                 //     ease: Power1.easeInOut},
//                 //     "-=0.6")
//                 .from(infoNavClose, 0.4, {
//                     autoAlpha: "0",
//                     ease: Power1.easeInOut})
//                 // .to([searchBlockMobile, infoNavMobile, headerLogoMobile, navToggleMobile, headerTopMobile, headerBottomMobile, headerLeftMobile, headerRightMobile], 0.3, {
//                 //     autoAlpha: "0",
//                 //     display: "none",
//                 //     ease: Power1.easeInOut},
//                 //     "-=0.6")
//
//             ;
//
//             infoNavMobile.click(function () {
//                 tl.reversed() ? tl.restart() : tl.reverse();
//             });
//             infoActiveLink.click(function () {
//                 tl.reversed() ? tl.restart() : tl.reverse();
//             });
//             infoNavClose.click(function () {
//                 tl.reverse();
//             });
//
//             return tl;
//         }
//
//     }
//
//     infoContentMobile();
//
//     /*=====  End of InfoNav Mobile  ======*/
//
//
//     /*=============================
//     =            Input            =
//     =============================*/
//
//     function itemCounter(field){
//
//         var fieldCount = function(el) {
//
//             var
//                 // Мин. значение
//                 min = el.data('min') || false,
//
//                 // Макс. значение
//                 max = el.data('max') || false,
//
//                 // Кнопка уменьшения кол-ва
//                 dec = el.prev('.dec'),
//
//                 // Кнопка увеличения кол-ва
//                 inc = el.next('.inc');
//
//             function init(el) {
//                 if(!el.attr('disabled')){
//                     dec.on('click', decrement);
//                     inc.on('click', increment);
//                 }
//
//                 // Уменьшим значение
//                 function decrement() {
//                     var value = parseInt(el[0].value);
//                     value--;
//
//                     if(!min || value >= min) {
//                         el[0].value = value;
//                     }
//                 };
//
//                 // Увеличим значение
//                 function increment() {
//                     var value = parseInt(el[0].value);
//
//                     value++;
//
//                     if(!max || value <= max) {
//                         el[0].value = value++;
//                     }
//                 };
//
//             }
//
//             el.each(function() {
//                 init($(this));
//             });
//         };
//
//         $(field).each(function(){
//             fieldCount($(this));
//         });
//     }
//
//     itemCounter(".fieldCount");
//
//     // /*=====  End of Input  ======*/
//
//     /*==================================
//     =            Arrow down            =
//     ==================================*/
//
//     var introSection = $('.vendor-description'),
//         introSectionHeight = introSection.height(),
//         //change scaleSpeed if you want to change the speed of the scale effect
//         scaleSpeed = 0.3,
//         //change opacitySpeed if you want to change the speed of opacity reduction effect
//         opacitySpeed = 1.3,
//         arrowDown = $('.arrow-down'),
//         opacityArrow = 6;
//
//     //update this value if you change this breakpoint in the style.css file (or _layout.scss if you use SASS)
//     var MQ = 480;
//
//     //bind the scale event to window scroll if window width > $MQ (unbind it otherwise)
//     function triggerAnimation(){
//         if($(window).width()>= MQ) {
//             $(window).on('scroll', function(){
//                 //The window.requestAnimationFrame() method tells the browser that you wish to perform an animation- the browser can optimize it so animations will be smoother
//                 window.requestAnimationFrame(animateIntro);
//             });
//         } else {
//             $(window).off('scroll');
//         }
//     }
//
//     triggerAnimation();
//     $(window).on('resize', function(){
//         triggerAnimation();
//     });
//
//     //assign a scale transformation to the introSection element and reduce its opacity
//     function animateIntro () {
//         var scrollPercentage = ($(window).scrollTop()/introSectionHeight).toFixed(5),
//             scaleValue = 1 - scrollPercentage*scaleSpeed;
//         //check if the introSection is still visible
//         if( $(window).scrollTop() < introSectionHeight) {
//             arrowDown.css({'opacity':1 - scrollPercentage*opacityArrow});
//         }
//         arrowDown.delay(600).fadeOut(600);
//     }
//
//     /*=====  End of Arrow down  ======*/
//
//
//
// })(jQuery);

function initMain() {
    menuLeft();
}

function initMainMobile() {

}

if (document.body.clientWidth > 820 || screen.width > 820) {
    initMain();
} else {
    initMainMobile();
}