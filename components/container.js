$(document).ready(function(){
    initActive();
    initBar();
    sliderFunc();
});

$(window).resize(function(){
  initBar();  
})

function initBar() {
    var barWidth = $(".active").css('width');
    var barOffset = $(".active").offset().left;
    $(".bar").css('width', barWidth);
    $(".bar").css('left', barOffset);
};

function initActive() {
    $(".portfolio").addClass("active");
    $("#section").load("./components/portfolio/portfolio.html");
};


function sliderFunc() {
    $(".portfolio").click(function(){
        var a = $(this).hasClass("active");
        if (a == false) {
            $("#section").load("./components/portfolio/portfolio.html");
        }
    });
    $(".career").click(function(){
        var a = $(this).hasClass("active");
        if (a == false) {
        $("#section").load("./components/career/career.html");
        }
    });
    $(".study").click(function(){
        var a = $(this).hasClass("active");
        if (a == false) {
        $("#section").load("./components/study/study.html");
        }
    })
    $(".info").click(function(){
        var a = $(this).hasClass("active");
        if (a == false) {
        $("#section").load("./components/info/info.html");
        }
    })
    $(".slide-item").click(function(){
        var a = $(".slide-item").hasClass("active");
         if( a ){
             $(".slide-item").removeClass("active");
             $(this).addClass("active");
         }
         initBar();
    });
}