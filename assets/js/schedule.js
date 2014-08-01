$(function() {
    var slot = $(".slot").click(function() {
        $(slot).each(function(){
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 500);
    });
});