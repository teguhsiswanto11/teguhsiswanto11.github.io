/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: https://www.ianlunn.co.uk/
Plugin URL: https://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
https://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

// text Animation
$(window).scroll(function() {
    // start up after 2sec no matter what
    /*window.setTimeout(function(){
        $('body').removeClass("loading").addClass('loaded');
    }, 2000);*/
    window.setTimeout(function(){
        $('body').removeClass("animate").addClass('animated');
    }, 2000);
});

(function( $ ){
    var $window = $(window);
    var windowHeight = $window.height();

    $window.resize(function () {
        windowHeight = $window.height();
    });

    $.fn.parallax = function(xpos, speedFactor, outerHeight) {
        var $this = $(this);
        var getHeight;
        var firstTop;
        var paddingTop = 0;
        
        //get the starting position of each element to have parallax applied to it      
        $this.each(function(){
            firstTop = $this.offset().top;
        });

        if (outerHeight) {
            getHeight = function(jqo) {
                return jqo.outerHeight(true);
            };
        } else {
            getHeight = function(jqo) {
                return jqo.height();
            };
        }
            
        // setup defaults if arguments aren't specified
        if (arguments.length < 1 || xpos === null) xpos = "50%";
        if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
        if (arguments.length < 3 || outerHeight === null) outerHeight = true;
        
        // function to be called whenever the window is scrolled or resized
        function update(){
            var pos = $window.scrollTop();              

            $this.each(function(){
                var $element = $(this);
                var top = $element.offset().top;
                var height = getHeight($element);

                // Check if totally above or totally below viewport
                if (top + height < pos || top > pos + windowHeight) {
                    return;
                }

                $this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
            });
        }       

        $window.bind('scroll', update).resize(update);
        update();
    };
})(jQuery);

// merubah warna Navigation saat scroll kebawah
$(window).scroll(function() {    

    var scroll = $(window).scrollTop();

    if (scroll >= 612) {
        $(".navbar-inverse").addClass("navbar").removeClass("navbar-inverse");
    } else {
        $(".navbar").addClass("navbar-inverse");    
    }

    if (scroll >= 700) {
        $(".logo-white").addClass("logo-black").removeClass("logo-white");
    } else {
        $(".logo-black").addClass("logo-white").removeClass("logo-black");    
    }
});