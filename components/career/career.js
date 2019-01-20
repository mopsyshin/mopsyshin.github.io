$(document).ready(function(){
    timeOutFunc();
})
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