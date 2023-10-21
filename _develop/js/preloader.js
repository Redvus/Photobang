(function ($) {

    /*=================================
    =            Preloader            =
    =================================*/

    // number of loaded images for preloader progress
    var loadedCount = 0; //current number of images loaded
    var imagesToLoad = $('.wrapper').length; //number of slides with .bcg container
    var loadingProgress = 0; //timeline progress - starts at 0

    $('.wrapper').imagesLoaded({
        background: true
      }
    ).progress( function( instance, image ) {
        loadProgress();
    });

    function loadProgress(imgLoad, image) {
        //one more image has been loaded
        loadedCount++;

        loadingProgress = (loadedCount/imagesToLoad);

        console.log(loadingProgress);

        // GSAP timeline for our progress bar
        TweenLite.to(progressTl, 0.7, {progress:loadingProgress, ease:Linear.easeNone});
    }

    //progress animation instance. the instance's time is irrelevant, can be anything but 0 to void  immediate render
    var progressTl = new TimelineMax({
        paused:true,
        onUpdate:progressUpdate,
        onComplete:loadComplete
    });

    progressTl
        //tween the progress bar width
        .to($('.progress span'), 1, {
            width: 400,
            ease: Linear.easeNone
        });

    //as the progress bar witdh updates and grows we put the precentage loaded in the screen
    function progressUpdate() {
        //the percentage loaded based on the tween's progress
        loadingProgress = Math.round(progressTl.progress() * 100);
        //we put the percentage in the screen
        $(".txt-perc").text(loadingProgress + '%');

    }

    //Timeline Preloader
    function loadComplete() {
        var loadTextPerc = $('.txt-perc'),
            loadProgress = $('.progress'),
            loadBody = $('body'),
            loadPreloader = $('#preloader'),
            tl = new TimelineMax()
        ;

        tl
            .to(loadTextPerc, 0.3, {y: -100, autoAlpha: 0, ease:Back.easeIn})
            .to(loadProgress, 0.3, {y: -100, autoAlpha: 0, ease:Back.easeIn}, 0.15)
            .set(loadBody, {className: '-=is-loading'})
            .to(loadPreloader, 0.7, {autoAlpha: 0, ease:Power3.easeInOut})
            .set(loadPreloader, {className: '+=is-hidden'});
        return tl;
    }

    //Timeline Category filter on Product page
    function loadFilter() {
        var loadCategoryFilter = $('.category-filter'),
            loadCategoryID = $('.category-grid'),
            loadProduct = $('.category-product'),
            tl = new TimelineMax()
        ;

        tl
            .staggerFrom(loadProduct, 0.8, {
                autoAlpha: 0,
                y: "20%",
                ease: Power1.easeInOut},
                0.15)
            .from(loadCategoryFilter, 1, {
                x: "20%",
                autoAlpha: 0,
                ease: Power1.easeInOut
            }, "-=0.9")
            // .from(loadCategoryID, 0.8,{
            //     autoAlpha: 0,
            //     ease: Power1.easeInOut
            // }, "-=1.2")
        ;
        return tl;
    }

    var masterLoad = new TimelineMax();
        masterLoad.add(loadComplete());
        // masterLoad.add(loadFilter());

    // console.log(loadComplete);

    /*=====  End of Preloader  ======*/


}(jQuery));