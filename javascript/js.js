var menuBar = false;



var background_couple = [['#F1CE56', '#2758B7'], ['#f1ce56', '#6fa8dc'], ['#F45232', '#2B74A8'], ['#368E6D', '#494674'], ['#4F2954', '#55F763'], ['#E9E81D', '#430333'], ['#5E27AD', '#BDA000'], ['#C36B47', '#5A3EA7'], ['#C36B47', '#A5E9AC'], ['#093280', '#93F4AD'], ['#B5B9D1', '#4F5279'], ['#296F55', '#F58A0A'], ['#F9C386', '#0163A3'], ['#5BB3C8', '#5A021A'], ['#3B945C', '#8C1C58'], ['#B89566', '#8EF1E6'], ['#4A8B8B', '#D8853B'], ['#427055', '#1E5E9F'], ['#057C62', '#7F89A3'], ['#80724B', '#E79573'], ['#538576', '#C7292D'], ['#8DA6A7', '#64F45D'], ['#ABA447', '#483661']]



function random_elem(array = background_couple){
	random_var = Math.random();
	real_length = array.length;
	return array[Math.floor(random_var*real_length)]
}



var InputMainMenu = document.querySelector('form>div>input');
var ButtonSearch = document.querySelector('form>button');
/*alert(InputMainMenu.text);
alert(InputMainMenu.textContent);
alert(InputMainMenu.attributes);*/



function getAttributes(elem) {
	var attributes = elem.attributes
for (var key in attributes) {
  /* Выбираем именно html-атрибуты */
  if (InputMainMenu.attributes[key].nodeName) {
      alert(InputMainMenu.attributes[key].nodeName + ': ' + InputMainMenu.attributes[key].nodeValue)
    }
}}



function alerts(value) {if (menuBar == false) { InputMainMenu.style.opacity = value}}

function focusOnInput(){input.focus()}

function widthShrinIn(quSelector){
	
	
	var  selected = document.querySelectorAll(quSelector);
	selected.forEach(function(userItem) {
		userItem.style.animationName = "widthShrinIn"
	})
}


function widthShrinOut(quSelector){
	
	
	var  selected = document.querySelectorAll(quSelector);
	selected.forEach(function(userItem) {
		userItem.style.animationName = "widthShrinOut"
	})
	
}

function checkMenu(){
	if (menuBar == false) {menuBar = true; document.querySelector('.form-control2.me-22').focus()}
	else {alert(document.querySelector('.form-control2.me-22').value)}
	
}


var input = document.querySelector('.form-control2.me-22')
//alert(input)
input.addEventListener('focus', (event) => {
	if (menuBar != false){
	//alert(document.activeElement.tagName)
  event.target.style.opacity = "1";
  event.target.style.width = "100%"
	}
  
  //alert(menuBar)
  
});

function returnAll(){
	input.style.opacity = "0";
	input.style.width = "5px"
	var  selected = document.querySelectorAll('.widthShrinOut');
	selected.forEach(function(userItem) {
		userItem.style.animationName = "widthShrinIn"
	})
	
		var  selected = document.querySelectorAll('.widthShrin');
	selected.forEach(function(userItem) {
		userItem.style.animationName = "widthShrinOut"
	})
	menuBar = false;
	
	var  selected = document.querySelectorAll('.btn.btn-outline-success');
	selected.forEach(function(userItem) {
		userItem.style.overflow = "inherit";
		userItem.style.padding = '5px';
		userItem.style.margin = '5px';
	})
	
}

const screenWidth = window.screen.width
const screenHeight = window.screen.height


//alert(document.querySelector('.mobileMenu').style.maxHeight)

//document.addEventListener('focus', (event) => {alert(document.activeElement.tagName)});

function check_status(elemquery){
	elem = document.querySelector(elemquery)
	if (elem.checked){
	return true;}
	else{return false;}
		
}

function random_hex_color(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
return color;}

function make_data_to_write_css_var(variable, color_to_write, prefixes = ';'){
	return variable + ": " + color_to_write + prefixes
}
function change_background_color_gradient(f_color, s_color){
	var f1 = '--main-bg-color'
	var f2 = '--main-bg-color2'
	var f3 = '--main-bg-color3'
	var f4 = '--main-bg-color4'
	var res = make_data_to_write_css_var(f1, f_color)
	res += make_data_to_write_css_var(f2, s_color)
	res += make_data_to_write_css_var(f3, s_color + '50')
	res += make_data_to_write_css_var(f3, s_color + '25')
	document.documentElement.style.cssText = res
	document.querySelector(".pidorasiki").innerHTML = res;
	document.querySelector("input[type=fcolor]").value = getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color');
	document.querySelector("input[type=scolor]").value = getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color2');
	document.querySelector("input[class=rootwr]").placeholder = document.querySelector(".pidorasiki").innerHTML
	
}

function ch_bg(){
	couple = random_elem()
	change_background_color_gradient(couple[0], couple[1])
}


function change_color(fcolor, scolor){
	var f1 = '--main-bg-color'
	var f2 = '--main-bg-color2'
	var f3 = '--main-bg-color3'
	var f4 = '--main-bg-color4'
	
	if (check_status('input[name=ch1]')){c1 = random_hex_color()}
	else {var c1 = fcolor.value}
	if (check_status('input[name=ch2]')){c2 = random_hex_color()}
	else {var c2 = scolor.value}
	
	var res = make_data_to_write_css_var(f1, c1)
	res += make_data_to_write_css_var(f2, c2)
	res += make_data_to_write_css_var(f3, c2 + '50')
	res += make_data_to_write_css_var(f3, c2 + '25')
	
	
	document.documentElement.style.cssText = res
	
	
	//alert(getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color'))
	//alert(getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color2'))

	// "--main-bg-color: " + fcolor.value + ";--main-bg-color2: " + scolor.value;
	//alert(getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color'))
	//alert(getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color2'))
	document.querySelector(".pidorasiki").innerHTML = res;
	document.querySelector("input[type=fcolor]").value = getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color');
	document.querySelector("input[type=scolor]").value = getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color2');
	document.querySelector("input[class=rootwr]").placeholder = document.querySelector(".pidorasiki").innerHTML

	//fcolor.value = 'JOPA';



}

//document.documentElement.style.cssText = "--main-bg-color: " + random_hex_color() + ";--main-bg-color2: " + random_hex_color();
//document.querySelector("input[type=fcolor]").value = getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color');
//document.querySelector("input[type=scolor]").value =getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color2');
//document.querySelector("input[class=rootwr]").placeholder = document.querySelector(".pidorasiki").innerHTML


function check_root(querySe = '.rootwr'){
	var variable = document.querySelector(querySe)
	if (variable.value != ""){document.documentElement.style.cssText = variable.value}
}

function check_jumba(){
	alert(document.querySelector("body").style.background = 'linear-gradient(var(--degrees), #C3C3B7, #321414)')
}


ch_bg()