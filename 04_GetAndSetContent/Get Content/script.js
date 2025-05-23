$(document).ready(function () {
  // Get text
  $(".getText").click(function () {
    const text = $(".textToBeGotten").text();
    alert(text);
  });

  // Get HTML
  $(".getHTML").click(function () {
    const html = $(".HTMLToBeGotten").html();
    alert(html);
  });

  // Get Input Value
  $(".getInputVal").click(() => {
    const val = $("#myInput").val();
    alert(val);
  });
});
