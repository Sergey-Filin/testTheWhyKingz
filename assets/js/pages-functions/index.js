document.addEventListener("DOMContentLoaded", function () {
    const swiper = new window.Swiper('.swiper-banners', {
        loop: true,
        loopFillGroupWithBlank: false,
        slidesPerView: "auto",

        pagination: {
            el: ".swiper-pagination",
            type: 'bullets',
            clickable: true,
            bulletClass: "swiper-pagination-el",
            bulletActiveClass: "swiper-pagination-el-active",
        }
    });
});
