var owl = $('.owl-carousel').owlCarousel({
    loop:false,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        },
        1500:{
            items:3
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