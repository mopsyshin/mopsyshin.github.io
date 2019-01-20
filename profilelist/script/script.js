$(document).ready(function(){
  var cardWidth = $(".wrap-card").css("width");
  // $(".wrap-card").css("height", cardWidth);

  $(".content").click(function(){
    if ( $(this).find(".profile-image").hasClass("activate") ) {

      $(this).find(".profile-image").removeClass("activate");
      $(this).find(".profile-image").addClass("deactivate");
      $(this).find(".wrap-disc").removeClass("activate");
      $(this).find(".wrap-disc").addClass("deactivate");

    } else {

      $(".wrap-disc").addClass("deactivate");
      $(".profile-image").addClass("deactivate");
      $(".wrap-disc").removeClass("activate");
      $(".profile-image").removeClass("activate");
      $(this).find(".wrap-disc").css("display", "block");
      $(this).find(".profile-image").addClass("activate");
      $(this).find(".profile-image").removeClass("deactivate");
      $(this).find(".wrap-disc").addClass("activate");
      $(this).find(".wrap-disc").removeClass("deactivate");
      $(this).find(".wrap-disc").removeClass("init");
      $(this).find(".profile-image").removeClass("init");

    };
  });

  $("#close").click(function(){
    $(".wrap-card").addClass("close");
    $(".wrap-card").removeClass("opencard");
  });
  $(".open").click(function(){
    $(".wrap-card").addClass("opencard");
    $(".wrap-card").removeClass("close");
  });

});
