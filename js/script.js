var lang = document.getElementById('lang');
lang.onchange = function () {
    window.location = 'http://127.0.0.1:5500/#.com' + lang.options[lang.options.selectedIndex].value + 'index.html'
}


window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        body.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            body.classList.toggle('menu_active');
        })
    })
})


// $(document).ready(function () {
//     $('.carousel_inner').slick({
//         prevArrow: '<a class="slick-prev"><img src="./icons/left-vector.png"></a>',
//         nextArrow: '<a class="slick-next"><img src="./icons/right-vector.png"></a>',
//         infinite: true,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         focusOnSelect: true,
//         responsive: [
//             {
//               breakpoint: 1026,
//               settings: {
//                 slidesToShow: 4,
       
//                 infinite: true,
//                 arrows: false,
//                 centerMode: true,
//               }
//             },
//             {
//               breakpoint: 427,
//               settings: {
//                 slidesToShow: 2,

//                 arrows: false,
//                 centerMode: true,   
//                 dots: true
//               }
//             }
//             // You can unslick at a given breakpoint now by adding:
//             // settings: "unslick"
//             // instead of a settings object
//           ]
//     });
// });