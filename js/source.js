

$("button").click(function () {
  $(".fa-times").toggle();
  $(".fa-bars").toggle();
  $("ul").animate({
    height: "toggle"
  });
});

// $("button").click(function(){
//     $(".fa-times").toggle()
//     $(".fa-bars").toggle()
//     $("ul").slideToggle(200)
// });