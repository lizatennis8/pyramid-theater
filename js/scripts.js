
function resetInputs() {
$("input#first-name").val("");
$("select#movietitle").val("");
$("input#age").val(" ");
$("select#time").val("");
$("select#screen").val("");
$("input#quanity").val(" ");
}




$(document).ready(function() {
  $("#ticket-page").submit(function() {
    event.preventDefault();
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


    resetInputs();
  });
});
