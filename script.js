$(document).ready(function() {
    
    $("#about_scroll").fadeOut();   
    $("#work_scroll").fadeOut();
    $("#art_scroll").fadeOut();  // New: Hide Art section on load
    $("#contact_scroll").fadeOut();

    $("#about").click(function(){
        $("#index").fadeOut();
        $("#about_scroll").fadeIn();
        $('#about_left').addClass('animated slideInLeft');
        $('#about_right').addClass('animated slideInRight');
    });
    
    $("#work").click(function(){
        $("#index").fadeOut();
        $("#work_scroll").fadeIn();
        $('#work_left').addClass('animated slideInLeft');
        $('#work_right').addClass('animated slideInRight');
    });
    
    $("#art").click(function(){  // New: Handler for Art button
        $("#index").fadeOut();
        $("#art_scroll").fadeIn();
        $('#art_left').addClass('animated slideInLeft');
        $('#art_right').addClass('animated slideInRight');
    });
    
    $("#contact").click(function(){
        $("#index").fadeOut();
        $("#contact_scroll").fadeIn();
        $('#contact_left').addClass('animated slideInLeft');
        $('#contact_right').addClass('animated slideInRight');
    });
    
    $(".back").click(function(){
        $(".pages").fadeOut();
        $("#index").fadeIn();
        $('#index_left').addClass('animated slideInLeft');
        $('#index_right').addClass('animated slideInRight');
    });

    // New: Initialize Owl Carousel for Work section (adjust options as needed)
    $("#owl-demo").owlCarousel({
        autoPlay: 3000,  // Auto-slide every 3 seconds
        items: 3,        // Number of items to show
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });

    // New: Initialize Owl Carousel for Art section
    $("#owl-demo-art").owlCarousel({
        autoPlay: 3000,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });
    
});