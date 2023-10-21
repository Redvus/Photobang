/*============================
=            Menu            =
============================*/

const navMain = document.querySelectorAll("#navMain > ul > li"),
    navBack = document.getElementById("navBack"),
    navToggle = document.getElementById("navToggle"),
    navMenuBack = document.getElementById("menuBack"),
    headerTopLogo = document.querySelector(".header-logo"),
    wrapper = document.querySelector(".wrapper"),
    navMenuIcon = document.getElementById("menuIcon"),
    navMenuUp = document.getElementById("menuUp"),
    navMenuDown = document.getElementById("menuDown"),
    navMenuArrow = document.getElementById("menuArrow"),
    navMenuCross = document.getElementById("menu_cross"),
    navMenuIconOver = document.getElementById("menu_icon_over"),
    navMenuUpOver = document.getElementById("menu_up_over"),
    navMenuDownOver = document.getElementById("menu_down_over"),
    navMenuArrowOver = document.getElementById("menu_arrow_over"),
    navClose = document.getElementById('navClose')
;

function menuLeft() {

   let tl = new gsap.timeline({
       reversed:true
   });

    tl
        // .to(navMenuIcon, {
        //     duration: 0.6,
        //     delay: "-0.8",
        //     autoAlpha: 0,
        //     ease: "back.inOut"
        // })

        .from(navBack, {
            duration: 0.4,
            delay: "-0.4",
            // autoAlpha: 0,
            x: "-100%",
            zIndex: "-1",
            ease: "expoScale.inOut"
        })
        .from(navMain, {
            duration: 0.2,
            delay: "-0.2",
            autoAlpha: 0,
            x: "-5%",
            stagger: 0.05,
            ease: "back.inOut"
        })
        .to([navMenuUp, navMenuDown, navMenuArrow], {
            duration: 0.1,
            delay: "-0.3",
            // x: "-200%",
            autoAlpha: 0,
            ease: "power2.Out"
        })
        // .to(, {
        //     duration: 0.6,
        //     delay: "-1.1",
        //     x: "-200%",
        //     autoAlpha: 0,
        //     ease: "back.inOut"
        // })
        // .to(, {
        //     duration: 0.6,
        //     delay: "-1.3",
        //     x: "-200%",
        //     autoAlpha: 0,
        //     ease: "back.inOut"
        // })
        // .to(navBack, {
        //     duration: 0.8,
        //     delay: "-1.4",
        //     right: "0",
        //     zIndex: "9800",
        //     ease: "power2.inOut"
        // })
        // .to(navMenuBack, {
        //     duration: 0.8,
        //     delay: "-1.4",
        //     x: "-15",
        //     autoAlpha: 0,
        //     ease: "back.inOut"
        // })
        .from(navClose, {
            duration: 0.3,
            // delay: "-0.2",
            autoAlpha: 0,
            x: "-50%",
            ease: "expoScale.in"
        })
        // .to(headerTopLogo, {
        //     duration: 0.6,
        //     delay: "-1.2",
        //     x: "-120%",
        //     ease: "power2.inOut"
        // })
    ;

    navToggle.addEventListener('click', () => {
        tl.play();
    });
    navClose.addEventListener('click', () => {
        tl.reversed() ? tl.restart() : tl.reverse();
    });

    return tl;
}

/*=====  End of Menu  ======*/

/*===================================
=            Menu Mobile            =
===================================*/

const navToggleMobile = document.getElementById('#navToggleMobile'),
    navToggleLine = document.getElementById('.mobile-line'),
    navToggleLineBefore = document.getElementById('.mobile-line--before'),
    navToggleLineAfter = document.getElementById('.mobile-line--after'),
    navMenuMobile = document.getElementById('#navMainMobile')
;

function menuLeftMobile() {

    var tl = new TimelineMax({reversed:true});

    tl
        .to(navMenuMobile, 0.4, {
                left: 0,
                zIndex: 9998,
                ease: Power1.easeInOut},
            "-=0.4")
        .to(navToggleLine, 0.3, {
                height: "0",
                ease: Power1.easeInOut},
            "-=0.6")
        .to(navToggleLineBefore, 0.5, {
                rotation: "45",
                y: "0",
                ease: Power2.easeInOut},
            "-=0.6")
        .to(navToggleLineAfter, 0.5, {
                rotation: "-45",
                y: "0",
                ease: Power2.easeInOut},
            "-=0.6")
    ;

    navToggleMobile.click(function () {
        tl.reversed() ? tl.restart() : tl.reverse();
    });

    return tl;
}

// menuLeftMobile();

/*=====  End of Menu Mobile  ======*/