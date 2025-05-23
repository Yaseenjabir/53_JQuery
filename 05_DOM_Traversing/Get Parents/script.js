$(document).ready(function () {
  // get single parent
  const item = $(".child").parent();
  console.log(item);

  // get single parent
  const item2 = $(".child").parents();
  console.log(item2);
});
