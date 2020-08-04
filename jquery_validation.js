class validate_registration_form {
	constructor() {
		this.first_name = '';
		this.last_name = '';
	}
	
	validate() {
		if($('#first_name').val() === '') {
			$('#first_name').css({'border-color' : 'red', 'border-width' : '1px'});
		} else {
			this.first_name = $('#first_name').val();
			$('#first_name').css({'border-color' : 'black'});
		}
		
		if($('#last_name').val() === '') {
			$('#last_name').css({'border-color' : 'red', 'border-width' : '1px'});
		} else {
			this.last_name = $('#last_name').val();
			$('#last_name').css({'border-color' : 'black'});
		}
		
		if(this.first_name !== '' && this.last_name !== '') {
			return true;
		} else {
			return false;
		}
	}
}

const validate_registration_form_obj = new validate_registration_form();

$('#submit').click(function() {
	if(validate_registration_form_obj.validate() === true) {
		var first_name = validate_registration_form_obj.first_name;
		var last_name = validate_registration_form_obj.last_name;
		console.log(first_name + ' ' + last_name);
	}
});