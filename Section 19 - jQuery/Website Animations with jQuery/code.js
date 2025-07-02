$(document).ready(function () {
  $("h1").css("color", "blue");
});

// already did the Event Listener here
$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
  //$("h1").slideToggle();
});
