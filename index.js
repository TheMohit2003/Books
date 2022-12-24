var carouselWidth = $('.carousel')[0].scrollWidth;
var cardWidth= $('.card').width();
console.log(cardWidth);
console.log(carouselWidth);

var scrollPosition = 0;

$('.carousel-control-next').on('click', function(){

    console.log(scrollPosition); 
    console.log(carouselWidth - (cardWidth * 4));   

    if(scrollPosition < (carouselWidth - (cardWidth))){
        console.log("here");
        scrollPosition = scrollPosition + cardWidth;
    $('.carousel-inner').animate({scrollLeft: scrollPosition},600);
    }
});

$('.carousel-control-prev').on('click', function(){
    console.log(scrollPosition);   
    if(scrollPosition > 0){
        console.log("prev");
        scrollPosition = scrollPosition - cardWidth;
    $('.carousel-inner').animate({scrollLeft: scrollPosition},600);
    }
});

