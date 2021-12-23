// $(function(){
//   $(".btn1").click(function(){
//     $("h1").text("I am learning Jquery");
//   });
// });
$(function(){
  $(".btn1").click(function(){
    $("h1").text(function(i,origi){
      return origi + " with Igneus!"
    });
  });
});
$(function(){
  $(".btn2").click(function(){
    $("h1").html("<i>I am getting good at Jquery<i>");
  });
});
$(function(){
  $(".btn3").click(function(){
    $("input").val("Paris");
  });
});
// $(function(){
//   $(".btn4").click(function(){
//     $("a").attr("href","http://yahoo.com");
//   })
// })
$(function(){
    $(".btn4").click(function(){
      $("a").attr({
        "href":"http://bing.com",
        "title":"Going to Bing Site"
      });
    })
  })
// $(function(){
//   $(".btn1").click(function(){
//     $('div').addClass("new new2");
//   });
// });
// $(function(){
//   $(".btn2").click(function(){
//     $("div").toggleClass("new");
//   });
// });
// $(function(){
//   $("#remove").click(function(){
//     console.log("fired");
//     $("div").removeClass("center");
//   })
// })