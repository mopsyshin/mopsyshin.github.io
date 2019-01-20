$(".btn").click(function(){
    var len = $(".img").length;  
    for ( var i = 0; i < len; i++ ) {
        if ( $(".img" + i).hasClass("active") !== true) {
            $(".img" + (i - 1)).addClass("inactive");
            $(".img" + i).addClass("active");
            $(".counter")[0].textContent = i;
            break;
        } 
    }
    if ($(".img" + (len - 1)).hasClass("active") == true ) {
        $(".refresh").addClass("active");
    }
});
$(".refresh").click(function(){
    var len = $(".img").length;  
    for ( var i = 0; i < len; i++ ) {
            $(".img" + (i + 1)).removeClass("active");
            $(".img" + i).removeClass("inactive");
    }
    $(this).removeClass("active");
    $(".counter")[0].textContent = 0;
});