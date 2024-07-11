$(document).ready(function () {
  $(".btn-success").click(function () {
    if ($("#text").val().length != 0) {
      var x = $(".container").html();
      var y =
        `<div class="alert alert-success alert-dismissible fade in">
                    <span class="close" data-dismiss="alert" aria-label="close">&times;</span>` +
        $("#text").val() +
        `</div>`;
      $(".container").html(y + x);
      $("#text").val("");
    } else alert("Enter some Text!");
  });

  // Close button click event with fade-out effect
  $(document).on("click", ".close", function () {
    $(this)
      .parent()
      .fadeOut(500, function () {
        $(this).remove();
      });
  });

  // When Task is clicked
  $(document).on("click", ".alert", function () {
    if ($(this).css("text-decoration-line") == "none")
      $(this).css("text-decoration-line", "line-through");
    else $(this).css("text-decoration-line", "none");
  });
});
