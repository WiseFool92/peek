$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#fade-in").fadeIn();
    $("#fade-out").fadeOut();
  });
});

$(document).ready(function() {
  $(".clickable2").click(function() {
    $("slide-up").slideUp();
    $("slide-down").slideDown();
  });
});