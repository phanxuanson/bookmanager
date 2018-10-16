$( document ).ready(function() {
	// Mocking data for the table
	var response = '[{"id":"001", "name":"Curence War", "numberofbook":"1043" }\
	,{"id":"002","name":"Mario Puzzo","numberofbook":"6765"}\
	,{"id":"003","name":"The Wordis Flat","numberofbook":"3465"}\
	,{"id":"004","name":"Happiness Now","numberofbook":"2345"}\
	,{"id":"005","name":"Rich Dad Poor Dad","numberofbook":"1234"}]';
	// Parse json to object
	response = $.parseJSON(response);

	// Reusable function for appending a row to the table
	function addRow(id, name, number) {
		$('<tr>').append(
			$('<td contenteditable="true">').text(id),
			$('<td contenteditable="true">').text(name),
			$('<td contenteditable="true">').text(number),
			$('<td class="table-remove">\
				<a href="#" class="table-remove btn-info btn-lg">\
				<span class="glyphicon glyphicon-remove"></span></a></td>')
			).appendTo('#list');
	}

	// Start rendering data to the table
	
	$(function () {
		$.each(response, function (i, item) {
			addRow.call(this, item.id, item.name, item.numberofbook);
		});
	});

	// Click events tracking
	
	$('.submit').click(function (event){
		
		
	});

	$(document).on('click', '.table-add', function (){
		addRow.call(this, "000", "Undefined", "1234");
		return false;
	});

	$(document).on('click', '.table-remove', function () {
		$(this).closest('tr').remove();
		return false;
	});

		});

