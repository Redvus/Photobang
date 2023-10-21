// Hide loading overlay <div /> (with spinner) after page complete loading. After hiding,
//   <div /> will be removed, and for <body> removed css class 'noscroll'
var _loading_spinner = setInterval(function() {

    if(document.readyState=='complete') {

        var $page_loading = document.getElementById('page_loading'),
            $body = document.body || document.getElementsByTagName('body')[0],
            speed = 1000, delay = 300;

        if((typeof $page_loading != 'undefined') && ($page_loading != null)) {

            setTimeout(function() {
                var transition = 'all ' + speed.toString() + 'ms ease-in-out',
                    removeCssClass = function(obj, className) {
                      obj.className = obj.className.replace(className, '').replace('  ', ' ');
                    };
                ['-webkit-transition','-moz-transition','transition'].forEach(function(prefix) {
                    $page_loading.style[prefix] = transition;
                });

                $page_loading.style['transform'] = 'translateX(-100%)';
                $page_loading.style['-webkit-transform'] = 'translateX(-100%)';
                $page_loading.style['background-color'] = '#ccc';
                $page_loading.style['filter']  = 'alpha(opacity=0)';

                removeCssClass($body, 'noscroll');

                setTimeout(function() {
                    $page_loading.parentNode.removeChild($page_loading);
                }, speed + 10);

            }, delay);
        }
        clearInterval(_loading_spinner);
    }

}, 10);
