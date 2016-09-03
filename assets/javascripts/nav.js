define(['jquery'], function ($) {
    $(function () {

        /* Responsive menu toggle */             //run when the DOM is ready
        $(".main-menu__toggle").click(function () {        //use a class, since your ID gets mangled
            $("body").toggleClass("menu-open"); //add the class to the clicked element
            if ($(".main-menu").is(":visible")) {
                $(".main-menu").hide("slide", { direction: "right" }, 300);
                $(".main-menu").addClass("hide");
            } else {
                $(".main-menu").show("slide", { direction: "right" }, 300);
                $(".main-menu").addClass("show");
                $(".main-menu").removeClass("hide");
            }

            $(window).on("resize", function () { // When resized to large remove display class
                if ($(window).width() > 1024) {
                    $('.main-menu').css('display','');
                    $("body").removeClass("menu-open");
                }
            }).resize();
        });
    });
});