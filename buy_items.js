$( document ).ready(function() {
    console.log( "buy_items.js ready!" );

  $( "#buyItems" ).on( "submit", function( event ) {
    event.preventDefault();
    console.log("you clicked Pay Now");

    //create a name, variable array with the form data
    var formData = $('#buyItems').serializeArray();

    $.post("insert_customer.php", formData, function(data) {
      console.log("customer inserted: " + data);
      $(".modal-body").html(data);
      
    });
  });


});


