$(function() {
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newDrink = {
        name: $("#new-drink").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/new", {
        type: "POST",
        data: newDrink
        }).then(
        function() {
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

    $(".delete-drink").on("click", function(event) {
        const id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/new/" + id, {
          type: "DELETE"
        }).then(
          function() {
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    
});



