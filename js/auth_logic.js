/*alert('Привет мир!')

*/

validation_count = 0


var current_inputs = [document.querySelector('.input_auth')];


//--preloaders_work----------
for (var i = 0; i < current_inputs.length; i++)
{	
	current_input = current_inputs[i]
	console.log(current_input)
	var parent = current_input.closest('.input_class')
	var legend = parent.querySelector('.legend')
	if (current_input.value != ''){
		legend.classList.add("activated");
}
}



//--Функции-------------------------------------------------------------------




function reloadPage() {
  location.reload();
}


function handleButtonClick(event) {
  reloadPage()
  // Здесь можно выполнить свой код или действия при нажатии на кнопку
}


//-----------------------------------------------

function getElementHeight(this_element = document.querySelector('.error_text')) {
  if (this_element) {
  	result = window.getComputedStyle(this_element)
    return result.height;
  }
  return 0; // Возвращаем 0, если элемент с указанным идентификатором не найден
}

function error_incode(){
	height = getElementHeight(document.querySelector('.error_text'))
	document.querySelector('.error').style.height = height
	legend.classList.add("warning");
	current_input.classList.add("warning");

}

function delete_all_style(element = document.querySelector('.error')){
	element.removeAttribute('style');
}





function next(){
	legend_text = 'Чпароль'
	forget_text = 'Забыли чпароль?'


	forget = document.querySelector('.forget.p1')
	c_forget = document.querySelector('.interest_button_creation')
	c_back = document.querySelector('.interest_button_back')

	forget.textContent = forget_text
	legend.textContent = legend_text

	c_forget.classList.add('display_none')
	c_back.classList.remove('display_none')

	
	c_back.addEventListener('click', handleButtonClick);
}


function create_account(){

	loader_ex()

	current_input.classList.add('first_registration')
	current_input.focus();
		current_input.classList.remove("warning");
	legend.classList.remove("warning");
	delete_all_style()
	enter_to_reg_text = 'Зарегистрироваться'
	legend_text = 'Телефон или адрес электронной почты'
	forget_text = 'Укажите номер телефона или электронную почту'

	enter_to_reg = document.querySelector('.auth > .default_cursor.p1')
	forget = document.querySelector('.forget.p1')
	c_forget = document.querySelector('.interest_button_creation')
	c_back = document.querySelector('.interest_button_back')

	forget.textContent = forget_text
	legend.textContent = legend_text
	enter_to_reg.textContent = enter_to_reg_text


	forget.classList.add('silenced')
	c_forget.classList.add('display_none')
	c_back.classList.remove('display_none')

	
	c_back.addEventListener('click', handleButtonClick);
}




function validation(elem){
	if (elem != 'Стасель'){
		error_incode()
	}

	else{
		inputElement.value = ""
		validation_count = validation_count + 1
		next()
	}

}


function loader_ex(){
	element = document.querySelector('.loader');
	if (element.classList.contains('loaderplus')) {
  			element.classList.remove('loaderplus')
} else {
  // Класс 'my-class' отсутствует у элемента
  element.classList.add('loaderplus')
}

}



function handler(){
	inputElement = document.querySelector('.input_auth');
	elem = inputElement.value
	console.log(inputElement.value)
	validation(elem)
	loader_ex()



}





//-----------------------Изменять font-size input при добавлении символов
/*
var input_auth = document.querySelector('.input_auth') ;


	input_auth.addEventListener("input", function() {
  var length = input_auth.value.length;
  if (length > 11){var fontSize = 6;}
  else if (length > 17){var fontSize = 4;}

  else {fontSize = getComputedStyle(document.documentElement).getPropertyValue('--font-size'); input_auth.style.fontSize = fontSize;}
   input_auth.style.fontSize = fontSize + "px";

  
});*/

//--preloaders_param----------





//--EVENTS-------------------------------------------------------------------



for (var i = 0; i < current_inputs.length; i++)
{	
	current_input = current_inputs[i]
	var parent = current_input.closest('.input_class')
	var legend = parent.querySelector('.legend')


	current_input.addEventListener("focus", function() {
	legend.classList.add("activated");
});

current_input.addEventListener("blur", function(event) {
	try{var length = current_input.value.length;}
	catch(err){length = 0}
	
	if (length == 0 ){
		current_input.classList.remove("activated_borders");
	legend.classList.remove("activated");
}
	else{
		current_input.classList.add("activated_borders");
	}

});

current_input.addEventListener("input", function() {
	current_input.classList.remove("warning");
	legend.classList.remove("warning");
	delete_all_style()
	
})

current_input.addEventListener("blur", function(event) {
	console.log('Сняли с фокуса элемент:')
  console.log(current_input)
});

current_input.addEventListener("focus", function() {
	console.log('Элемент в фокусе:')
	console.log(current_input)

});
}



current_input.addEventListener('keypress', function(event) {
	myButton = document.querySelector('.button_standart.p1');
  if (event.keyCode === 13) {
    myButton.focus();
    myButton.click();
  }
});



const allLinks = document.querySelectorAll('a');

function preventLinkNavigation(event) {
  event.preventDefault();
  // Здесь можно выполнять свой код или действия, которые должны произойти при нажатии на ссылку, без перехода
}

allLinks.forEach(link => {
  link.addEventListener('click', preventLinkNavigation);
});

//----Бяки
const openButton = document.querySelector('.back_s');

openButton.addEventListener('click', function() {
  // Укажите путь к другому HTML-документу вместо "path/to/your/document.html"
  console.log('redirect')
  window.location.href = 'https://zabuka-g5qe.vercel.app/index.html';
});


