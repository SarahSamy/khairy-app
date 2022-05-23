// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidesPerGroup: 3,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });



      const swiper = new Swiper('.swiper', {
        observer: true,
        observeParents: true,
        loop: true,
        speed: 400,
        spaceBetween: 100,
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 10,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
    })
    // swiper.slideNext();
    swiper.on('slideChange', function () {
        console.log('slide changed');
    });
    function carouselProperties() {
    return new Swiper(".swiper", {
        init: false,
        freeMode: true,
        slidesPerView: "2",
    });
}
$(".swiper-slide").click(function(){
    // Here we define a variable that returns the swiper
    const carousel = carouselProperties()
    // Afte we define this variable we can finally call the init function
    carousel.init();
});
