// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-burger").on("click", function (event) {
    const id = $(this).data("id");
    console.log(id);
    const newState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function () {
        // console.log("changed sleep to", true);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete").on("click", function (event) {
    const id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        // console.log("changed sleep to", true);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  })

  ////////////////---------------/////////////////
  //the below below if for creating a new burger
  ////////////////---------------/////////////////
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    //not sure about code below
    const name = $("#burger-name").val().trim();


    //not sure about code above
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: { name: name }
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      });

  });


});
