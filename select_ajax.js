console.log("select_ajax.js loaded");
$.getJSON("select_ajax_query.php", function( jsonData ) {
	//console.log(jsonData);
	jsonData.forEach( function(i) { 
		//$("#catalogue").append("<h3>"+i[1]+"</h3>");
		//$("#catalogue").append(i[4]+"<br>");
		$("#catalogue").append('<div class="col-sm-4">\
			<h3>'+i[1]+'</h3>\
			<img src="images/'+i[3]+'" alt="" class="img-responsive">\
			<p><strong>$'+i[2]+' </strong> '+i[4]+'</p>\
			<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#addCustomer">add to cart</button>\
		</div>');
			});


});

