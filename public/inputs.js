var inputs = (function() {
  
	var taxonomy = {
		sphere: ["radius"],
		cone: ["radius", "height"],
		cylinder: ["radius", "height"],
		rectprism: ["length", "width", "height"]
	}

	function createForm(shape){		
		var $form = $('<form class="form-inline"></form>')
		
		for (var i = 0; i < taxonomy[shape].length; i++){
			var $input = $('<input type="number" class="form-control mb-2 mr-sm-2 mb-sm-0" name="" placeholder="" onkeydown="javascript: return event.keyCode == 69 ? false : true">')
			$input.attr({
				name: taxonomy[shape][i],
				placeholder: 'Enter ' + taxonomy[shape][i].toUpperCase()
			})
			$form.append($input)
		}
		var $calculateButton = $('<button id="calculate" class="btn btn-primary">Calculate</button>')
		$form.append($calculateButton);
		
		return $form
	}
  

  
  
  var module = {
		"createForm": createForm
	}
	return module;

})();