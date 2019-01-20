$(document).ready(function(){
     $("#gnb").load("./app/gnb/gnb.html")
     changePage("./app/trend/wrap_trend.html")
     $(window).resize(function(){
        initDisc();
    })
    
  //   $('#wrap_noti').click(function(event){
  //     event.stopPropagation();
  // });
});


// 리스트사이즈 리사이즈 함수
function listSizeFunction() {
  if ($("#container").width() > 1751) {
    $("#list").css({
      "width" : "1710px"
    })
    initGrid();
  } else if ($("#container").width() > 1471 ) {
    $("#list").css({
      "width" : "1420px"
    })
    initGrid();
  } else if ($("#container").width() > 1181 ) {
    $("#list").css({
      "width" : "1130px"
    })
    initGrid();

  } else if ($("#container").width() > 891 ) {
    $("#list").css({
      "width" : "840px"
    })
    initGrid();

  } else if ($("#container").width() > 551 ) {
    $("#list").css({
      "width" : "570px"
    })
    initGrid();

  } else if ($("#container").width() > 261 ) {
    $("#list").css({
      "width" : "280px"
    })
    initGrid();
  } else {
    $("#list").css({
      "width" : "100%"
    })
    initGrid();
  }
}
  // 페이지변경
  function changePage(page) {
    $("#wrap-container").load(page)
  }
  // 경고창 로드
  function alert() {
    var alert = $('<div id="alert"></div>')
    $("body").prepend(alert)
    $("#alert").load("./app/popup/alert.html")
  }
  // 경고창 사라짐
  function removeAlert() {
    $("#alert").animate({
      opacity: 0
    }, 200, 'swing', function(){
      $("#alert").remove();
    });
  }

// notification toggle

function toggleNoti() {
  var noti = $('<div id="wrap_noti"></div>');
  var notiLength  = $("#wrap_noti").length;
  if ( notiLength == 0 ) {
    $(".gnb").append(noti);
    $("#wrap_noti").load("./app/gnb/notification.html");
  }
}

function removeNoti() {
  $("#wrap_noti").animate({
    opacity: 0
  }, 200, 'swing', function(){
    $("#wrap_noti").remove();
  });
}


  // disc섹션 토글
  function toggleDisc(){
    var listWidth = $("#list").width();
    var discWidth = 440;
    if ($("#disc").css("opacity") == "0") {
      $("#disc").css({
        "-webkit-transform":"translateX(0)",
        "opacity":"1"
      });
      $("#container").css({
        "width":"calc(100vw - 440px)"
      }, 1000, function() {
        listSizeFunction();
      });
      $(".toggle_disc").css({
        "-webkit-transform":"rotate(0deg)",
        "background-color":"transparent"
      });

    } else if ($("#disc").css("opacity") == "1"){
      $("#disc").css({
        "-webkit-transform":"translateX(440px)",
        "opacity":"0"
      });
      $("#container").css({
        "width":"100vw"
      });
      $(".toggle_disc").css({
        "-webkit-transform":"rotate(180deg)",
        "background-color":"#fff"
      });
      setTimeout(function(){
        listSizeFunction();
    },600);

    } else {

  }
}
// initDisc
function initDisc(){
  var listWidth = $("#list").width();
  var discWidth = 440;
  $("#disc").css({
    "-webkit-transform":"translateX(0)",
    "opacity":"1"
  });
  if ($(window).width() < 1024) {
    $("#container").css({
      "width":"100%"
    });
  } else {
    $("#container").css({
      "width":"calc(100vw - 440px)"
    });
    listSizeFunction();
  }
  $(".toggle_disc").css({
    "-webkit-transform":"rotate(0deg)"
  });
}

// GNB 내 요소 링크모음
function gnbFunction() {
  $(".logo-box").click(function(){
    changePage("./app/trend/wrap_trend.html")
  })
  $(".user-box").click(function(){
    changePage("./app/userpage/wrap_userp.html")
  })
  $(".noti-box").click(function(){
    toggleNoti();
  })
}

//trend 내 요소 링크모음
function trendFunction() {
  $("#btn_all_channel").click(function(){
    changePage("./app/channel/wrap_channel_list.html")
  })
  $(".ch_item").click(function(){
    changePage("./app/channel/wrap_channel_page.html")
  })
}

// 카드 내 요소 링크모음
function cardFunction() {
  $(".card .title").click(function(){
    changePage("./app/post/wrap_post.html")
  })
  $(".card .wrap_image").click(function(){
    changePage("./app/post/wrap_post.html")
  })
  $(".card .card_top").click(function(){
    changePage("./app/channel/wrap_channel_page.html")
  })
  $(".card .writer").click(function(){
    changePage("./app/userpage/wrap_userp.html")
  })
}

// 코멘트 내 요소 링크모음
function commentFucntion() {
  $(".user_name").click(function(){
    changePage("./app/userpage/wrap_userp.html")
  })
}

// 채널 리스트 내 요소 링크모음

function channellistFunction() {
  $(".channel_list_item").click(function(){
    changePage("./app/channel/wrap_channel_page.html")
  })
}
// 포스트 내 요소 링크모음
function postFunction() {
  $(".ch").click(function(){
    changePage("./app/channel/wrap_channel_page.html")
  })
  $(".writer").click(function(){
    changePage("./app/userpage/wrap_userp.html")
  })
}
// toggleReply
function toggleReply() {
  $(".btn_add_reply").click(function(){
    var thisLocation = $(this).closest(".wrap_comment_item")
    var addComment = $('<div id="add_reply"></div>')
    var modiScroll = $("#disc").scrollTop() + 52;
    if (thisLocation.find("#add_reply").length > 0){
      thisLocation.find("#add_reply").remove()
    } else {
      thisLocation.append(addComment);
      thisLocation.find("#add_reply").load("./app/post/add_reply.html", function() {
        $("#disc").scrollTop(modiScroll);
      })
    }

  });
}


// 페이지 페이드인 애니메이션함수
function pageFadeIn(pagename) {
  $(pagename).animate({
    opacity: 1
  }, 400, 'swing');
}

// 유저페이지 초기화 함수
function initUserPage() {
  $("#contents_container").load("./app/userpage/user_post.html");
  $(".menu_post").addClass("active");
  var thisPosition = $(".active").offset().left
  $(".select_bar").offset({left : thisPosition});
}

// 유저페이지 함수모음
function userpageFunction() {
  $(".btn_menu_item").click(function(){
    var barWidth = $(this).width() + 48;
    $(".btn_menu_item").removeClass("active");
    $(this).addClass("active");
    var thisPosition = $(this).offset().left
    $(".select_bar").width(barWidth);
    $(".select_bar").offset({left : thisPosition});
  })
  $(".menu_post").click(function() {
    $("#contents_container").load("./app/userpage/user_post.html");
  })
  $(".menu_series").click(function() {
    $("#contents_container").load("./app/userpage/user_series.html");
  })
  $(".menu_comment").click(function() {
    $("#contents_container").load("./app/userpage/user_comment.html");
  })
  $(".menu_subscribe").click(function() {
    $("#contents_container").load("./app/userpage/user_subscribe.html");
  })
  $(".menu_follow").click(function() {
    $("#contents_container").load("./app/userpage/user_follow.html");
  })
  $(".menu_scrap").click(function() {
    $("#contents_container").load("./app/userpage/user_scrap.html");
  })
}

function loadCard() {
  itemNum = $(".grid-item").length
  for ( var i = 0; i <= itemNum; i++ ) {
    var temp = i - 1;
    $(".grid-item:nth-child("+ i +")").load("./app/card/card" + temp +".html")
    setTimeout(function(){
        initGrid();
    },200);
  }
}

function loadCommentCard() {
  itemNum = $(".grid-item").length
  for ( var i = 0; i <= itemNum; i++ ) {
    var temp = i - 1;
    $(".grid-item:nth-child("+ i +")").load("./app/commentcard/commentcard" + temp +".html")
    setTimeout(function(){
      initGrid();
    },200);
  }
}
function loadSeriesCard() {
  itemNum = $(".grid-item").length
  for ( var i = 0; i <= itemNum; i++ ) {
    var temp = i - 1;
    $(".grid-item:nth-child("+ i +")").load("./app/series/card" + temp +".html")
    setTimeout(function(){
      initGrid();
    },200);
  }
}

function initGrid() {
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 260,
    gutter:20
  });
}
// 모바일 댓글창 테스트 코드

// function toggleCommentBox() {
//   $(".toggle_comment_box").click(function(){
//     $(".hidden_comment_box").css({"transform":"translateY(0)"});
//     setTimeout(
//        function() {
//          $(".temporary_toggle").css({'display':'block'});
//        }, 500);
//   });
// }
// function temporaryToggle() {
//   $(".temporary_toggle").click(function() {
//     if ($(".hidden_comment_box").css("opacity") == 0) {
//       $(".hidden_comment_box").css({"display":"block"});
//       setTimeout(
//          function() {
//            $(".hidden_comment_box").css({'opacity':'1'});
//          }, 100);
//     } else if ($(".hidden_comment_box").css("opacity") == 1) {
//       $(".hidden_comment_box").css({"opacity":"0"});
//       setTimeout(
//          function() {
//            $(".hidden_comment_box").css({'display':'none'});
//          }, 500);
//     }
//
//   })
// }
