$(document).ready(function () {
  $(".animate").click(function () {
    $(".aboutToAnimate").animate({
      left: "250px",
      opacity: "0.5",
      height: "150px",
      width: "150px",
    });
  });
  $(".queueButton").click(function () {
    const div = $(".queueAnimate");
    div.animate({ left: "200px", fontSize: 20 }, 2000);
    div.animate({ left: "400px", fontSize: 40 }, 2000);
    div.animate({ left: "600px", fontSize: 60 }, 2000);
    div.animate({ left: "400px", fontSize: 40 }, 2000);
    div.animate({ left: "200px", fontSize: 20 }, 2000);
    div.animate({ left: "0px" }, 2000);
  });
});
