/*
    Scripts
 
    NIM Designs 2015

    Lily Grace Site
*/


/*  GALLERY SLIDER SCRIPTS  */
$(document).ready(function ($) {
    $('#example2').sliderPro({
        arrows: true,
        width: '100%',
        height: 400,
        aspectRatio: -1,
        visibleSize: '100%',
        //thumbnailArrows: true,
        autoplay: true,
        responsive: true,
        forceSize: true,
        smallSize: 500,
        mediumSize: 1000,
        largeSize: 3000,
        imageScaleMode: 'contain',
    });

    // instantiate fancybox when a link is clicked
    $('#example2 .sp-image').parent('a').on('click', function (event) {
        event.preventDefault();

        // check if the clicked link is also used in swiping the slider
        // by checking if the link has the 'sp-swiping' class attached.
        // if the slider is not being swiped, open the lightbox programmatically,
        // at the correct index
        if ($('#example2').hasClass('sp-swiping') === false) {
            $.fancybox.open($('#example2 .sp-image').parent('a'), { index: $(this).parents('.sp-slide').index() });
        }
    });
});

//($(document).ready(function ($) {
//    $('#example3').sliderPro({
//        //width: 960,
//        height: 600,
//        fade: true,
//        arrows: true,
//        buttons: true,
//        fullScreen: true,
//        shuffle: true,
//        smallSize: 500,
//        mediumSize: 1000,
//        largeSize: 3000,
//        thumbnailArrows: true,
//        autoplay: true,
//        responsive: true,
//        imageScaleMode: 'contain',
//    });

    
//}));


//$(document).ready(function(){
//    $('.nim-slick').slick({
//        accessibility: true,
//        dots: true,
//        edgeFriction: 0.15,
//        arrows: true,
//        mobileFirst: true,
//        initialSlide: 0,
//        respondTo: window,

//    });

//    $('.slider-for').slick({
//        slidesToShow: 1,
//        slidesToScroll: 1,
//        arrows: false,
//        fade: true,
//        asNavFor: '.slider-nav'
//    })
//    $('.slider-nav').slick({
//        slidesToShow: 3,
//        slidesToScroll: 1,
//        asNavFor: '.slider-for',
//        dots: true,
//        centerMode: true,
//        focusOnSelect: true
//    });
    
//});






/* SLICK SLIDER JS */

//($('.center').slick({
//    centerMode: true,
//    centerPadding: '60px',
//    slidesToShow: 3,
//    responsive: [
//      {
//          breakpoint: 768,
//          settings: {
//              arrows: false,
//              centerMode: true,
//              centerPadding: '40px',
//              slidesToShow: 3
//          }
//      },
//      {
//          breakpoint: 480,
//          settings: {
//              arrows: false,
//              centerMode: true,
//              centerPadding: '40px',
//              slidesToShow: 1
//          }
//      }
//    ]
//}));





/*  SLIDER PRO INSTANTIATION SCRIPT  */

//$('#my-slider').sliderPro({
//    width: 960,
//    height: 500,
//    arrows: true,
//    buttons: false,
//    waitForLayers: true,
//    fade: true,
//    autoplay: false,
//    autoScaleLayers: false
//});


//    @*  SLIDER PRO EXAMPLE 2  *@
//    @*<script type="text/javascript">
//        $(document).ready(function ($) {
//            $('#example2').sliderPro({
//                width: '50%',
//                height: 600,
//                aspectRatio: 1.5,
//                visibleSize: '100%',
//                forceSize: 'fullWidth'
//            });

//            // instantiate fancybox when a link is clicked
//            $('#example2 .sp-image').parent('a').on('click', function (event) {
//                event.preventDefault();

//                // check if the clicked link is also used in swiping the slider
//                // by checking if the link has the 'sp-swiping' class attached.
//                // if the slider is not being swiped, open the lightbox programmatically,
//                // at the correct index
//                if ($('#example2').hasClass('sp-swiping') === false) {
//                    $.fancybox.open($('#example2 .sp-image').parent('a'), { index: $(this).parents('.sp-slide').index() });
//                }
//            });
//        });
//</script>*@

//@*  SCRIPT TO PREVENT USERS SAVING IMAGES ON THE SITE  *@

//<script language="javascript">
//    function click() {
//        if (event.button == 2) {
//            alert('Sorry, this function is disabled.')
//        }
//    }
//document.onMouseDown = click
//Read more : http://www.ehow.com/how_6954461_make-pictures-unsaveable-pages.html 

//</script>

//@*<script>
//    $('img').live('contextmenu', function(e){
//        return false;
//    });
//</script>

//<script>
//    $('img').bind('contextmenu', function (e) {
//        return false;
//    });
//</script>



