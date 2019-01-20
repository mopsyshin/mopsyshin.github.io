$(document).ready(function(){
    portfolioFunc();
    timeOutFunc()
})

function pageReverse( id ) {
    var btn = "#" + id ;
    var url =  "./components/detail/" + id + ".html";
    $(btn).click(function(){
        $(".wrapper").addClass("inactive");
        setTimeout(function(){
            $("#app").load(url);
        }, 300);
    });
}

function portfolioFunc() {
    var itemLength = $(".item-portfolio").length;
    for ( var i=0; i<itemLength; i++ ) {
        var id = $('.item-portfolio')[i].id;
        pageReverse( id );        
    }
}

function activeItem ( e ){
    var activeId = "#" + e;
    $(activeId).addClass("active");
}

function timeOutFunc() {
    var itemLength = $(".item").length;
    for (var i =0; i<itemLength; i++ ) {
        (function(index) {
            var findId = $('.item')[i].id;
            setTimeout(function() { 
                activeItem ( findId );
            }, i * 70);
        })(i);
        
    }
}