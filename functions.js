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