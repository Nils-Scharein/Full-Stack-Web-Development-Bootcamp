$(document).ready(function () {
  $("h1").css("color", "blue");
});

// already did the Event Listener here
$("button").on("click", function () {
  $("h1").css("color", "purple");
});

$(document).keypress(function (event) {
  console.log(event.key);
  $("h1").text(event.key);
});

$("h1").before("<button>New Button before</button>");
$("h1").after("<button>New Button after</button>");

$("button").remove();
