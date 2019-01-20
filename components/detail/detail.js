$(document).ready(function(){
    $(window).scrollTop(0);
})

$(".btn-back").click(function(){
    $(".detail-container").addClass("inactive");
    setTimeout(function(){
        $("#app").load("./index.html");
    }, 300);
})

$("#link-redot").click(function(){
    var url = "./redot/index.html"; 
    window.open(url);
});

$("#link-08l").click(function(){
    var url = "https://goo.gl/ZT3LFj"; 
    window.open(url);
});

$("#link-mosher").click(function(){
    var url = "http://www.modooshuttle.com/"; 
    window.open(url);
});

$("#link-bbuzzart").click(function(){
    var url = "http://www.bbuzzart.com/"; 
    window.open(url);
});

$("#link-caricature").click(function(){
    var url = "https://thepartizan.github.io/randomcaricature/"; 
    window.open(url);
});

$("#link-abc").click(function(){
    var url = "./chat/index.html"; 
    window.open(url);
});

$("#link-player").click(function(){
    var url = "./player/player.html"; 
    window.open(url);
});

$("#link-profile").click(function(){
    var url = "./profilelist/index.html"; 
    window.open(url);
});

$("#link-republic").click(function(){
    var url = "http://republicdot.com/"; 
    window.open(url);
});

$("#link-ercenter").click(function(){
    var url = "./images/ER_center_violence_prediction_project.pdf"; 
    window.open(url);
});
$("#link-composer").click(function(){
    var url = "./colorcomposer/index.html"; 
    window.open(url);
});
$("#link-heartclick").click(function(){
    var url = "./heartclick/index.html"; 
    window.open(url);
});