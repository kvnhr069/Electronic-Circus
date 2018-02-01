$('#arrow-right').click(function() {
    var currentSlide = $('.slide.one');
    var nextSlide = currentSlide.next();

    currentSlide.fadeOut(300).removeClass('.slide.one');
    nextSlide.fadeIn(300).addClass('.slide.two');

    if(nextSlide.length == 0) {
        $('.slide').first().fadeIn(300).addClass('active');
    }
});

$('.services').hover(function() {
    $('.sub').show();
    }, function() {
        $('.sub').hide();
});

$('.sub').mouseenter(function() {
    $('.sub').show();
});

$('.sub').mouseleave(function() {
    $('.sub').hide();
});


/* --- DISPLAYS EVENT DATA --- */

$( "#events-US" ).click(function() {
  $( "#table-US" ).slideToggle( "slow", function() {
  });
});

$( "#events-DE" ).click(function() {
  $( "#table-DE" ).slideToggle( "slow", function() {
  });
});

$( "#events-FR" ).click(function() {
  $( "#table-FR" ).slideToggle( "slow", function() {
  });
});

$( "#events-NL" ).click(function() {
  $( "#table-NL" ).slideToggle( "slow", function() {
  });
});



$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});



var client_id = '278594df9a311b2a1a56251b3a2b0fbe';
var track_id = '293605256';

SC.initialize({
    client_id: "53902af7a344bb0351898c47bc3d786f"
});


$(document).ready(function() {
    $('#player1').on('click', function() {
        SC.stream("/tracks/48950267", function(sound) {
            sound.play();
        });
    });
});