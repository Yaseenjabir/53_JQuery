$(document).ready(function () {
  // get its own children
  const item = $(".grandParent").children();
  console.log(item);

  // get single parent
  const item2 = $(".grandParent").find("*");
  console.log(item2);
});
