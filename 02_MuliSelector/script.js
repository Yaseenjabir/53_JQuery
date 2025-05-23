$(document).ready(function () {
  $("#selectedOne").on({
    mouseenter: function () {
      $(this).css("color", "#39c04f");
    },
    mouseleave: function () {
      $(this).css("color", "#1605b1");
    },
  });

  $("button").click(function () {
    $(".hidethis").hide(1000, () => alert("Element has been hidden"));
  });
});
