var owl = $('.owl-carousel').owlCarousel({
    loop:false,
    rewind:true,
    nav:true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    dots:true,
    responsive:{
        0:{
            items:1
        },
        1200:{
            items:2
        }
    }
})

// owl.owlcarousel2_filter( '.blue' );

$( '.owl-filter-bar' ).on( 'click', '.item', function() {

    var $item = $(this);
    var filter = $item.data( 'owl-filter' )

    $item.addClass( 'current' ).siblings().removeClass( 'current' );

    owl.owlcarousel2_filter( filter );

} )