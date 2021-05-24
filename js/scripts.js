$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });

    var modal1 = new bootstrap.Modal(document.getElementById('loginModal'), {
        keyboard: false})
    var modal2 = new bootstrap.Modal(document.getElementById('reserveForm'), {
        keyboard: false})

    $("#loginButton").click(function(){
        modal1.show()
    })
    $("#reserveButton").click(function(){
        modal2.show()
    });
});