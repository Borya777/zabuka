
var current_position_of_payment = 'false'; // '#id'

function form_check_si(cur_id){
	current_position_of_payment = cur_id
	form_check_si_logic()
}

function form_check_si_logic(cur_id = current_position_of_payment){
	x = document.querySelector('#card_reader').offsetHeight

	
	if (cur_id == '#in_person'){document.querySelector('.reqesits').style.height = '0px'}
	else {document.querySelector('.reqesits').style.height = x + 'px' }
}


window.addEventListener('resize', function(event){
	if (current_position_of_payment != 'false'){form_check_si_logic()}
  // do stuff here
});


