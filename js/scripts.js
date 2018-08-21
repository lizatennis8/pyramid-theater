//business logic

function Customer(name, age) {
  this.nameOfCustomer = first;
  this.ageOfCustomer = age;
  this.paymentInfo = [];
}

function Payments(number, city, state) {
  this.numberOnCard = number;
  this.cityOnCard = city;
  this.stateOnCard = state;
}


function resetInputs() {
$("input#first-name").val("");
$("select#movietitle").val("");
$("input#age").val(" ");
$("select#time").val("");
$("select#screen").val("");
$("input#quantity").val(" ");
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


    if (ageInput < 10) {
      $(".priceresult").text("$" + quantityInput * 6);
    } else if (ageInput > 65) {
      $(".priceresult").text("$" + quantityInput * 8);
    } else if (ageInput > 10) {
      $(".priceresult").text("$" + quantityInput * 11);
    }

    $("#tickettotal").show();


    resetInputs();
  });
});
