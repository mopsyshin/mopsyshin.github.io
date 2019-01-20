$(document).ready(function(){
  $("#annotation").click(function(){
    if ($(this).hasClass("selected")) {

    } else {
      $(this).addClass("selected")
      $("#comments").removeClass("selected")
      $("#bar").removeClass("right").addClass("left")
      $(".tab-annotation").removeClass("inactive").addClass("active").css("display", "block")
      $(".tab-comments").removeClass("active").addClass("inactive").css("display","none")

    }
  });

  $("#comments").click(function(){
    if ($(this).hasClass("selected")) {

    } else {
      $(this).addClass("selected")
      $("#annotation").removeClass("selected")
      $("#bar").removeClass("left").addClass("right")
      $(".tab-annotation").removeClass("active").addClass("inactive").css("display", "none")
      $(".tab-comments").removeClass("inactive").addClass("active").css("display", "block")
    }
  });

  $(".overay").click(function(){
      $(this).fadeOut(200);
      $(".modal").removeClass("activate").addClass("inactive").fadeOut(200);
      $(".add-annotation").fadeOut(200);

  });
  $("#submit").click(function(){
      $(".overay").fadeOut(200);
      $(".add-annotation").fadeOut(200);

  });
  $(".modal").click(function(){
    $(this).removeClass("activate").addClass("inactive").fadeOut(200);
    $(".add-annotation").fadeIn(200);
  });

  $(function(){
    $(".section-article").bind('mouseup', function(e){
        var selection;

        if (window.getSelection) {
          selection = window.getSelection();

          if(selection.toString() !== ''){

            $(".modal").css("display", "block").css("top", e.clientY-50).css("left", e.clientX-42).removeClass("inactive").addClass("activate");
            $(".overay").css("display", "block").addClass("on");
          }

        } else if (document.selection) {
          selection = document.selection.createRange();
        }

    });
  });


});
