document.querySelector("body").style.backgroundColor = "red";

$(document).ready(function () {
  $("h1").css("color", "blue");
});

$("button").on("click", function () {
  $("h1").text("Test");
  $("button").html("<em>Hey</em>");
});
