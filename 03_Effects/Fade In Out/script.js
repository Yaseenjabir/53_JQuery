$(document).ready(function () {
  $(".fadeIn").click(function () {
    $("div").fadeTo("slow", 0, () => alert("Div fade in"));
  });
  $(".fadeOut").click(function () {
    $("div").fadeTo("slow", 1, () => alert("Div has been rendered"));
  });
});
