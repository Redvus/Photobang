(function () {

    window.onload = function () {

        var images = document.images,
            images_total_count = images.length,
            images_loaded_count = 0,
            $page_loading = document.getElementById('page_loading'),
            perc_loaded = document.getElementById('perc_loader'),
            preloader = document.getElementById('page_loading'),
            loader = document.getElementById('loader')
            // wrapper_visible = document.getElementById('wrapper_visible')
        ;

        /*=============================================
        =            Preloader with Images            =
        =============================================*/

        for (var i = 0; i < images_total_count; i++) {
            image_clone = new Image();
            image_clone.onload = image_loaded;
            image_clone.onerror = image_loaded;
            image_clone.src = images[i].src;
        }

        // console.log(images_total_count);
        // console.log(images_loaded_count);

        function image_loaded() {
            images_loaded_count++;

            perc_loaded.innerHTML = (((100 / images_total_count) * images_loaded_count) << 0) + '%';

            if (images_loaded_count >= images_total_count) {
                setTimeout(function () {

                    if (!loader.classList.contains('loader--done')) {
                        loader.classList.add('loader--done');
                    }

                    if (!preloader.classList.contains('done')) {
                        preloader.classList.add('done');
                    }

                    if (!perc_loaded.classList.contains('loader-perc--done')) {
                        perc_loaded.classList.add('loader-perc--done');
                    }

                    // if (!wrapper_visible.classList.contains('wrapper--visible')) {
                    //     wrapper_visible.classList.add('wrapper--visible');
                    // }

                }, 400);
            }
        }

        setTimeout(function () {
            $page_loading.parentNode.removeChild($page_loading);
        }, 1200);

        /*=====  End of Preloader with Images  ======*/

    };

})();