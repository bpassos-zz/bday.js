<?php
	include_once('db.php');

	$name = $_POST['name'];
	$age = $_POST['age'];
	$bday = $_POST['birthday'];

	if(mysql_query("INSERT INTO user VALUES ('$name', '$age', '$bday')"))
		echo "Successfully Inserted";
	else
		echo "Insertion Failed";
?>