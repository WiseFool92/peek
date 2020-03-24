$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#fade-in").fadeIn();
    $("#fade-out").fadeOut();
  });
});