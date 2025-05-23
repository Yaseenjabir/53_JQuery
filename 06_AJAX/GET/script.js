$(document).ready(function () {
  // GET Request
  $(".getButton").click(function () {
    $.get("https://jsonplaceholder.typicode.com/posts", (data, status) => {
      const getResponseElement = $(".getResponse");
      if (status === "success") {
        getResponseElement.text(JSON.stringify(data));
      } else {
        getResponseElement.text("Something went wrong!!");
      }
      JSON.stringify(data);
    });
  });

  // POST Request
  $(".postButton").click(function () {
    const getResponseElement = $(".postResponse");
    $.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        name: "SOmething",
        age: "20",
        email: "dummy@gmail.com",
      },
      (_, status) => {
        if (status === "success") {
          getResponseElement.text("POST Request done successfully");
        } else {
          getResponseElement.text("Something went wrong");
        }
      }
    );
  });
});
