var menuBar = false;




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

function change_color(fcolor, scolor){
	alert(getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color'))
	alert(getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color2'))

	document.documentElement.style.cssText = "--main-bg-color: " + fcolor.value + ";--main-bg-color2: " + scolor.value;
	alert(getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color'))
	alert(getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color2'))
	
	document.querySelector("input[type=fcolor]").value = getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color');
	document.querySelector("input[type=scolor]").value = getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color2');

	//fcolor.value = 'JOPA';



}
document.querySelector("input[type=fcolor]").value = getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color');
document.querySelector("input[type=scolor]").value =getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color2');



