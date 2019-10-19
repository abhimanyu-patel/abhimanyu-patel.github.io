$(window).on("load", function(){
    $(".loader .inner").fadeOut(500, function(){
        $(".loader").fadeOut(750);
    });

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });
})

$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Solutions Engineer.", "Web Developer.", "Data Science Enthusiast."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        items: 4, 
        autoplay: true,
        smartSpeed: 3000,
        autoplayTimeout: 3000,
        // the following  parameter is required for the scrollbar. The value can be one out of "scroll" or "progress"
        scrollbarType: "progress",

        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });
    //mousewhweel functionality
    /*owl.on('mousewheel', '.owl-stage', function(e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });*/

    var skillsTopOffset = $(".skillsSection").offset().top;//skillstopoffset is the value when the skills section is in view
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;

    $(window).scroll(function() {
        //pageYOffset is the amount that you have scrolled in the window
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

        if (!countUpFinished && window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $(".counter").each(function(){
            var element = $(this);
            var endingValue = parseInt(element.text());

            element.countup(endingValue);

        })
            countUpFinished = true; 

        }
    });

    $("[data-fancybox]").fancybox();

    $("#filters a").click(function() {
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });


    $("#navigation li a").click(function(e){
        e.preventDefault();
        var targetElement = $(this).attr("href");
        var targetPosition  = $(targetElement).offset().top;
        $("html, body").animate({scrollTop: targetPosition - 50}, "slow");
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation(){

        var body = $("body");
        if ($(window).scrollTop() >= navTop){
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }
    
});


















