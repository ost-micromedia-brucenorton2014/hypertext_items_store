<?php
	require_once  '_includes/connect.php';
	
	$name = $_REQUEST["name"];
	$email = $_REQUEST["email"];
	//define table
		$tbl = "customers";//change to your table i.e. John_app
	//write query
		$query = "INSERT INTO $tbl (name, email) VALUES (?,?)";
	//prepare statement, execute, store_result
		if($insertStmt = $mysqli->prepare($query)){
			$insertStmt->bind_param("ss", $name, $email);
			$insertStmt->execute();

			$insertRows = $insertStmt->affected_rows;
			
		}else{
			echo("<br>Oops there was an error: $insertStmt->error");
			echo("<br>$mysqli->error");
		}
		//if the info got inserted
		if($insertRows > 0){
			echo("<br>Thanks $name we have saved your email: $email.
					<h4>Credit Card Info</h4>
					<p>not really of course</p>");
		}else{
			echo("<br>Sorry, there was a problem saving your info.");
		}
		$insertStmt->close();
		$mysqli->close();

?>