$(document).ready(function() {
  $("#ticket-page").submit(function() {
    var firstNameInput = $("#first-name").val();
    var movieTitleInput = $("#movietitle").val();
    var ageInput = $("#age").val();
    var timeInput = $("#time").val();
    var screenInput = $("#screen").val();
    var quantityInput = $("#quantity").val();

    $(".first-name").text(firstNameInput);
    $(".movietitle").text(movieTitleInput);
    $(".age").text(ageInput);
    $(".time").text(timeInput);
    $(".screen").text(screenInput);
    $(".quanity").text(quantityInput);


    $("#tickettotal").show();

    event.preventDefault();
  });
});
