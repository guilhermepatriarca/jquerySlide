$(document).ready(function () {

    //Set Options
    var speed = 500; //ms
    var autoswitch = true; //bollean
    var autoswitch_speed = 4000; //ms

    // add Initial 
    $('.slide').first().addClass('active');

    //hidden All Slides
    $('.slide').hide();

    //Show frist slide
    $('.active').show();


    // Next handler
    $('#next').on('click', nextSlide);
    // Prev handler
    $('#prev').on('click', prevSlide);


    // Auto Slider Handler
    if(autoswitch ===true){
        setInterval(nextSlide,autoswitch_speed);
    }

    // Switch to next Slide
    function nextSlide(){
         $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':last-child')) {
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active')
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
    //Switche to prev Slide
    function prevSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':first-child')) {
            $('.slide').last().addClass('active');
        } else {
            $('.oldActive').prev().addClass('active')
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
});