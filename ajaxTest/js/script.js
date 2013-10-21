$(function() {
    $( "#datepicker" ).datepicker();
});

var bdayArray = [];

$( "#addBirthday" ).on("click", function() {
	var $inputName = $("#whosBirthday");
	var $inputDate = $("#datepicker");
	var $inputNote = $("#birthdayNote");
	
	var bdayObject = createBday ($inputName.val(), $inputDate.val(), $inputNote.val());
	addBday(bdayObject);
	drawBday(bdayObject);

	if ($inputName.val() == "") {
		$('#whosBirthday').after('<span class="error"> Please enter the name </span>');
	}

	$('#myModal').modal('hide');
	$('.alert').slideDown("slow").delay(1500).slideUp('slow');
	// console.log($inputName.val());
	// console.log($inputDate.val());
	// console.log($inputNote.val());
});


function addBday (bday) {
	bdayArray.push(bday);
	//This is where the ajax magic happens...
}

function drawBday (bdayInfo) {
	var $birthday = $("#bdayTable tbody");

	//Create a row element
	var $bdayRow = $("<tr></tr>");
	
	//Create a <th> element
	var $bdayHeader = $("<th></th>");
	//Put the name in <th>
	$bdayHeader.html(bdayInfo.name);
	//Add <th> to the row
	$bdayRow.append($bdayHeader);


	//Create a <td> element
	var $bdayDateTd = $("<td></td>");
	//Put the date in the <td>
	$bdayDateTd.html(bdayInfo.date);
	//Add <td> to row
	$bdayRow.append($bdayDateTd);
	
	
	//Create a <td> element
	var $bdayNoteTd = $("<td></td>");
	//Put the notes in <td>
	$bdayNoteTd.html(bdayInfo.note);
	//Add <td> to row
	$bdayRow.append($bdayNoteTd);

	
	//Add the row to the table 
	$birthday.append($bdayRow);
}

function createBday (name, date, note) {
	return {
		name: name,
		date: date,
		note: note,
		toString: function() {
			return this.name;
		}

	};
}


//Clears modal after close

$.clearInput = function () {
    $('form').find('input[type=text], textarea').val('');
};

$('#myModal').on('hidden.bs.modal', function () {
	$.clearInput();
})
	