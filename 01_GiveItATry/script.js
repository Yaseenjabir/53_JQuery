$(document).ready(function () {
  //  Events on <button>
  $("button").click(function () {
    $(this).hide();
    $("#toBeHide").hide();
  });

  // Hide <p> on hover
  $("p").mouseenter(function () {
    $(this).hide();
  });

  // Show <p> when unhover
  $("p").mouseleave(function () {
    $(this).show();
  });
});
