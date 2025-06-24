// document.querySelector("h1").innerHTML = "Good Bye";

document.firstElementChild.lastElementChild.children[3].lastElementChild.innerHTML =
  "Nils";

document.getElementsByTagName("li")[2].style.color = "purple";

document.getElementsByClassName("btn")[0].style.color = "red";
document.getElementsByClassName("btn")[0].style.backgroundColor = "yellow";
document.getElementsByClassName("btn")[0].style.border = "none";

document.getElementById("title").style.color = "green";
document.getElementById("title").innerHTML = "Hallo!";

document.querySelector("li a");

var listItems = document.querySelectorAll("#list .list");
for (var i = 0; i < listItems.length; i++) {
  listItems[i].innerHTML = "Index: " + i + " " + listItems[i].innerHTML;
}

function myFunction() {
  document.getElementById("checkbox").click();

  document.getElementById("checkbox").classList.toggle("invisible");

  var listItems = document.querySelectorAll("#list .list");
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].classList.toggle("huge");
  }

  /*
  // Toggle does the same, but in a much easier way.
  if (document.getElementById("checkbox").classList.contains("invisible")) {
    document.getElementById("checkbox").classList.add("visible");
    document.getElementById("checkbox").classList.remove("invisible");
  } else {
    document.getElementById("checkbox").classList.remove("visible");
    document.getElementById("checkbox").classList.add("invisible");
  }
    */
}

document.getElementById("myButton").addEventListener("click", myFunction);

document.querySelector("a").getAttribute("href");
document
  .querySelector("a")
  .setAttribute(
    "href",
    "https://www.w3schools.com/jsref/prop_style_border.asp"
  );
