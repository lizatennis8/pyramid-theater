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
    var adultInput = $("#adulttix").val();
    var kidInput = $("#kidtix").val();
    var seniorInput = $("#seniortix").val();
    var timeInput = $("#time").val();
    var screenInput = $("#screen").val();
    var priceResult = ((seniorInput * 8) + (kidInput * 6) + (adultInput * 11));
    console.log(priceResult);


    $(".first-name").text(firstNameInput);
    $(".movietitle").text(movieTitleInput);
    $(".time").text(timeInput);
    $(".screen").text(screenInput);
    $(".adult").text(adultInput);
    $(".senior").text(seniorInput);
    $(".kid").text(kidInput);
    $(".priceresult").text("$" + priceResult)


    // if (screenInput === "Mini Screen") {
    //   $(".priceresult").text("$" + quantityInput * 6);
    // } else if (ageInput > 65) {
    //   $(".priceresult").text("$" + quantityInput * 8);
    // } else if (ageInput > 10) {
    //   $(".priceresult").text("$" + quantityInput * 11);
    // }

    $("#tickettotal").show();


      $("#makepayment").click(function() {
        $("#tickettotal").append("Your payment has been accepted. Thank you for choosing Pyramid Theater. We hope you enjoy the show!");
      });


    resetInputs();
  });
});
