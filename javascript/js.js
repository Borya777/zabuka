
var InputMainMenu = document.querySelector('form>div>input');
var ButtonSearch = document.querySelector('form>button');
/*alert(InputMainMenu.text);
alert(InputMainMenu.textContent);
alert(InputMainMenu.attributes);*/


function pauseBrowser(millis) {
    var date = Date.now();
    var curDate = null;
    do {
        curDate = Date.now();
    } while (curDate-date < millis);
}



function getAttributes(elem) {
	var attributes = elem.attributes
for (var key in attributes) {
  /* Выбираем именно html-атрибуты */
  if (InputMainMenu.attributes[key].nodeName) {
      alert(InputMainMenu.attributes[key].nodeName + ': ' + InputMainMenu.attributes[key].nodeValue)
    }
}}



function alerts(value){InputMainMenu.style.opacity = value}

function fadeOutRight(quSelector){
	
	var  selected = document.querySelector(quSelector);

	document.querySelector(quSelector).style.animationName = "fadeOutRight"
	//pauseBrowser(10000);
	//document.querySelector(quSelector).style.display = 'none'
}




/*getAttributes(InputMainMenu)*/

