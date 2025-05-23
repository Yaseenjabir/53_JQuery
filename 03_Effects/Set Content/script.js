$(document).ready(function () {
  // Get text
  $(".getText").click(function () {
    $(".textToBeGotten").text("This is some text which is changed");
    alert("Text has been changed successfully");
  });

  // Get HTML
  $(".getHTML").click(function () {
    $(".HTMLToBeGotten").html("<h1>Hello world </h1>");
    alert("HTML changed");
  });

  // Get Input Value
  $(".getInputVal").click(() => {
    $("#myInput").val("Modified values");
    alert("Value has been changed");
  });
});
