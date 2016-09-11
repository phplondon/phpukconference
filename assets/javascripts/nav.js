define(['jquery'], function ($) {
    $(function () {

        /* Responsive menu toggle */             //run when the DOM is ready
        $(".main-menu__toggle").click(function () {        //use a class, since your ID gets mangled
            $("body").toggleClass("menu-open"); //add the class to the clicked element
            if ($(".mobile-nav").is(":visible")) {
                $(".mobile-nav").hide("slide", { direction: "right" }, 300);
                $(".mobile-nav").addClass("hide");
            } else {
                $(".mobile-nav").show("slide", { direction: "right" }, 300);
                $(".mobile-nav").addClass("show");
                $(".mobile-nav").removeClass("hide");
            }

            $(window).on("resize", function () { // When resized to large remove display class
                if ($(window).width() > 1024) {
                    $('.mobile-nav').css('display','');
                    $("body").removeClass("menu-open");
                }
            }).resize();
        });
    });
});