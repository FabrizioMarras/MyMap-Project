
 $('#search').keyup(function() { // binding the keyup element - activate the reading of the JSON when someone click to write on the search.before that there is no element displayed on the page
		var searchField = $('#search').val(); // get the typed text.
		var myExp = new RegExp(searchField, "i"); // regular expression to check case insensitive (typing "i") in the search field.
			$.getJSON('data.json', function(data) { // Read the JSON data and feed the data into a function literal.
				var output = '<ul class="searchresults">'; // output the JSON data into the HTML, with a class to target it with CSS.
				$.each(data, function(key, val) { // each statement to output the list items.
					if ((val.name.search(myExp) != -1) || // after reading the typing: not equal to -1, means it did find the data.
					(val.city.search(myExp) != -1) ||
					(val.department.search(myExp) != -1) ||
					(val.job.search(myExp) != -1) ||
					(val.description.search(myExp) != -1) ||
					(val.skills.join().search(myExp) != -1)) {
						output += '<li>'; // output the list items.
						output += '<h2>'+ val.name +'</h2>';// output the list item - name.
						output += '<img src="images/'+ val.shortname +'_tn.jpg" alt="'+ val.name +'" />'; // output the list item - image.
						output += '<h3>'+ val.job +'</h3>'; // output the list item - job title.
						output += '<h4>'+ val.city +'</h4>'; // output the list item - city.
						output += '<p>'+ val.description +'</p>'; // output the list item - job description.
						output += '<p>'+ val.skills.join(' / ') +'</p>'; // output the list item - skills.
						output += '<a href="mailto:'+ val.contact +'" title="send email">'+ val.contact +'</a>'; // output the list item - contact info: email.
						output += '</li>'; // close output of the list items.
					}
				});
				output += '</ul>'; // closing the output from placing the JSON data into the HTML.
				$('#update').html(output);
			}); //get JSON
});
