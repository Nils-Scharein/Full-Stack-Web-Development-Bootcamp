document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.createElement("div");
  tooltip.style.position = "fixed";
  tooltip.style.background = "rgba(0,0,0,0.8)";
  tooltip.style.color = "white";
  tooltip.style.padding = "4px 8px";
  tooltip.style.borderRadius = "4px";
  tooltip.style.fontSize = "12px";
  tooltip.style.display = "none";
  tooltip.style.zIndex = "1000";
  document.body.appendChild(tooltip);

  document.querySelectorAll("svg path").forEach((path) => {
    path.addEventListener("mouseenter", () => {
      tooltip.innerText =
        path.getAttribute("title") +
          " " +
          "(" +
          path.getAttribute("id") +
          ")" || "No Title";
      tooltip.style.display = "block";
      console.log("Entered: " + tooltip.innerText);
    });

    path.addEventListener("mousemove", (e) => {
      tooltip.style.left = e.pageX + 10 + "px";
      tooltip.style.top = e.pageY + 10 + "px";
    });

    path.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });

    path.addEventListener("click", () => {
      const form = document.createElement("form");
      form.method = "POST"; // Oder "GET"

      // Werte hinzufügen
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "country";
      input.value = path.getAttribute("id");

      form.appendChild(input);

      if (path.classList.contains("visited")) {
        form.action = "/delete";
        console.log("Click Delete");
        path.classList.remove("visited");
      } else {
        form.action = "/add";
        console.log("Click Add");
      }
      console.log("Clicked " + path.getAttribute("title"));
      document.body.appendChild(form);
      form.submit();
    });
  });
});
