document.querySelector("body").style.backgroundColor = "red";

$(document).ready(function () {
  $("h1").css("color", "blue");
});

$("button").on("click", function () {
  $("a").attr("href", "https://www.yahoo.com");
});
