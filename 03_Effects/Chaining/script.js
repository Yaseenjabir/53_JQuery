$(document).ready(function () {
  $("button").click(function () {
    const p = $("p");
    p.css("color", "white").slideUp(2000).slideDown(2000);
  });
});
