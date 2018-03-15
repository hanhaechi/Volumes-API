$(document).ready(function() {

		$('.dropdown-menu > button').on('click', function(event){
			// remove all the inputs from the previous dropdown selection
			$('.form-inline').remove()
			$('#result').text('')

			// show shape's name in dropdown
			var selText = $(this).text()
			$(this).parents('#dropdown').find('.dropdown-toggle').html(selText)

			// generate input fields for the shape
			var shape = event.currentTarget.id
			var $form = inputs.createForm(shape)
			$('#inputs').append($form)
			disableDefault(shape)
		})

		function disableDefault(shape){
			$('#calculate').on('click', function(event){
				$('#result > h6').remove()
				event.preventDefault()
				createQuery(shape)
			})
		}

		function createQuery(shape){
			var items = $('.form-inline > input').length
			var query = []

			for (var i = 0; i < items; i++){
				query[i] = $('.form-inline > input').eq(i).attr("name") + '=' + $('.form-inline > input').eq(i).val()
			}

			var queryParams = query.join('&')
			var url = '/'+shape+'?'+queryParams
			runQuery(url)
		}

		function runQuery(url){
			$.ajax({
				url: url,
				type: 'GET',
				success: function(data) { // get result of the calculations
					visualiseResult(data)
				},
				error: function() {
					apologise()
				}
			});
		}
	
		var $result = $('#result')
				
		function visualiseResult(data){
			var $outcome = "The volume equals: "+ data.toFixed(2) 
			$result.css("color", "black")
						 .text($outcome)
		}

		function apologise(){
			var $fail = "I'm sorry, I could not calculate"
			$result.css("color", "red")
							.text($fail)
		}

});