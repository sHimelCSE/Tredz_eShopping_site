
$(document).ready(function () {
    // banner slide js start
    $(".banner_slide").owlCarousel({
        items: 1,
        nav: true,
        navText: ["<i class='fas fa-angle-left prev_arrow'></i>", "<i class='fas fa-angle-right next_arrow'></i>"],
        dots: false,
        loop: true,
        smartSpeed: 700,
    });
    // banner slide js end
    // video light box js start
    $(".venobox").venobox({
        framewidth: "70%",
        titleattr: "data-title",
        titleBackground: "#ffffff",
        titleColor: "#ab6db0",
        titlePosition: "top",
        share: ["facebook", "linkedin", "pinterest", "twitter"],
        spinner: "cube-grid",
        spinColor: "#ab6db0",
    });
    // video light box js end
});
