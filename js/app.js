$(".header__hamburger").click(function(){
    $(".header__navigation").addClass("visible z-index");
})

$(".header__navigation-close").click(function(){
    $(".header__navigation").removeClass("visible z-index");
})

// $("a").click(function(){
//     $(".link-active").removeClass("link-active");
//     $(this).addClass("link-active");
// })