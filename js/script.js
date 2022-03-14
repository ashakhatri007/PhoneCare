$(function() {
    /* BOOTSNIPP FULLSCREEN FIX */
    if (window.location == window.parent.location) {
        $('#back-to-bootsnipp').removeClass('hide');
        $('.alert').addClass('hide');
    }

    $('#fullscreen').on('click', function(event) {
        event.preventDefault();
        window.parent.location = "http://bootsnipp.com/iframe/Q60Oj";
    });

    $('[id="repair-nav"]').bind('click', function(event) {
        event.preventDefault();
        $('#repair').modal('show');
    })

    $('[id="unlocking-nav"]').bind('click', function(event) {
        event.preventDefault();
        $('#unlocking').modal('show');
    })

    $('[id="about-nav"]').bind('click', function(event) {
        event.preventDefault();
        $('#aboutus').modal('show');
    })

    $('[id="contact-nav"]').bind('click', function(event) {
        event.preventDefault();
        $('#contactus').modal('show');
    })

    $('[id="franchise-nav"]').bind('click', function(event) {
        event.preventDefault();
        $('#franchise').modal('show');
    })

    $('[id="career-nav"]').bind('click', function(event) {
        event.preventDefault();
        $('#career').modal('show');
    })

    $('[id="appoint-nav"]').bind('click', function(event) {
        event.preventDefault();
        $('#appoint').modal('show');
    })

    $('[id="case-nav"]').bind('click', function(event) {
        event.preventDefault();
        $('#case').modal('show');
    })

    $('[id="access-nav"]').bind('click', function(event) {
        event.preventDefault();
        $('#access').modal('show');
    })

    $('[id="screen-nav"]').bind('click', function(event) {
        event.preventDefault();
        $('#screen').modal('show');
    })

    $('[id="tablet-nav"]').bind('click', function(event) {
        event.preventDefault();
        $('#tablet').modal('show');
    })



    $('.btn-mais-info').on('click', function(event) {
        $('.open_info').toggleClass("hide");
    })


});