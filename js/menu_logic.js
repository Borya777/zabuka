//alert('connected' alert(document.querySelector(".menu_panel").offsetHeight));//

var menu_active = false
var active_search = false






/*    Вертикальный скролбар и играния с ним                     */
function getVerticalScrollbarWidth() {
  var outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  document.body.appendChild(outer);

  var scrollbarWidth = outer.offsetWidth - outer.clientWidth;

  document.body.removeChild(outer);

  return scrollbarWidth;
}





function hasVerticalScrollbar() {
  return document.documentElement.scrollHeight > window.innerHeight;
}


function vertical_check(){
if (hasVerticalScrollbar()) {
  var scrollbarWidth = getVerticalScrollbarWidth();
  return scrollbarWidth
} else {
  return false
}
}

function resize_vertical_check(){
        result = vertical_check()
        console.log(result)
        if (result == false){
                res = '0px'
        }
        else{
                res = result + 'px'

        }
        console.log(res)
        document.documentElement.style.setProperty('--scrolbar_html', res);

        
}


resize_vertical_check()

/*    Конец Вертикальный скролбар и играния с ним                     */





function collapse_elem(elem = '.user_actions'){
        document.querySelector(elem).style.width = '0px'

}

function uncollapse_elem(elem = '.user_actions', variableValue = getComputedStyle(document.documentElement).getPropertyValue('--width_user_actions')){
        document.querySelector(elem).style.width = variableValue
}



function updatePanelHeight(param_query = '.menu_panel', exchanger_query = '.heightV') {
var heightValueElement = document.querySelector(param_query);
var panelHeight = heightValueElement.offsetHeight;
document.querySelector(exchanger_query).textContent = panelHeight;
        }


/*window.addEventListener("load", function() {updatePanelHeight()}, false);
window.addEventListener("resize", function() {updatePanelHeight()}, false);*/



function menu_cross(){

     var top_line = document.querySelector('#line_1');
     var bot_line = document.querySelector('#line_2');
     var menu_button = document.querySelector('.Menu_button');
     document.querySelector('.count_case').style.display = 'none';
     menu_button.style.height = '100%'
     menu_button.style.paddingLeft = '3.5px'
     top_line.style.transform = "rotate(39.5deg)";
     bot_line.style.transform = "rotate(-39.5deg)";

     /*array = document.querySelectorAll('.line').style.width = '25px';
     for (elem in array){
        try {array[elem].style.width = '21px';}
        catch(e) {}
        }*/
/*
     top_line.style.transformOrigin = 'left top';
     bot_line.style.transformOrigin = 'left bottom';*/
     bot_line.style.transformOrigin = 'left top';
     top_line.style.transformOrigin = 'left bottom';

}

function menu_cross_reverse(){

     var top_line = document.querySelector('#line_1');
     var bot_line = document.querySelector('#line_2');
     var menu_button = document.querySelector('.Menu_button');
     document.querySelector('.count_case').style.display = 'block';
     menu_button.style.height = '60%'
     menu_button.style.paddingLeft = '0px'
     top_line.style.transform = "rotate(0deg)";
     bot_line.style.transform = "rotate(0deg)";

     /*
     array = document.querySelectorAll('.line')/*.style.width = '25px';
     for (elem in array){
        try {array[elem].style.width = '20px';}
        catch(e) {}
        }*/

     bot_line.style.transformOrigin = 'left top';
     top_line.style.transformOrigin = 'left bottom';

}

function hide_elems(){
        document.querySelector('.firstscreen').style.display = 'none';
        document.querySelector('.secondscreen').style.display = 'none';
        document.querySelector('.lera1').style.height = '300%';

}


function test(curent_elem){
        alert(curent_elem)
}


/*function menu_button_action(classlist){

}
}


classlist = ['Menu_button', 'ss', 'ssa', 'active']


*/

function lenght(array){
        counter = 0
        for (elemwwwwhgjhfhfg in array){
                counter = counter + 1
        }
        return counter


}



function delete_element_from_array(array, elem_to_del){

var new_array = []

for (elem in array) {

        if (array[elem] != elem_to_del){new_array.push(array[elem])}

}
return new_array

}





function element_in_array(array = ['Menu_button', 'ss', 'ssa', 'active'], elem_for_check = 'active'){
var my_lenght = lenght(array)

for (elem in array) {

        if (array[elem] == elem_for_check){return true}

}
return false

}

function display_cur(array, delimeter = ' '){
        var classnames = ''
        for (elem in array){
                if (elem != 0){classnames = classnames + delimeter}
                classnames = classnames + array[elem]
                
        }
        return classnames
}





function assemble_event_activity(classlist, active='active'){
        var active_element = element_in_array(classlist)
        classlist = classlist.value.split(' ')

        var rootStyles = getComputedStyle(document.documentElement);
        var variableValue = rootStyles.getPropertyValue('--menu_height');



        if (active_element == false){

                menu_active = true
                menu_cross()
                collapse_elem()
                space_name = '.' + display_cur(classlist, '.')
                classlist.push(active)
                space_name_new = display_cur(classlist, ' ')
                document.querySelector(space_name).className = space_name_new
                document.querySelector('.firstscreen').style.height = 'calc(100vh - var(--menu_height))'
                document.querySelector('.container_main').style.display = 'none'
                

        }

        else if(active_element == true){
                menu_active = false
                menu_cross_reverse()
                uncollapse_elem()
                space_name = '.' + display_cur(classlist, '.')
                classlist_new = delete_element_from_array(classlist, active)
                space_name_new = display_cur(classlist_new, ' ')
                document.querySelector(space_name).className = space_name_new
                document.querySelector('.firstscreen').style.height = '0px'
                document.querySelector('.container_main').style.display = 'block'

        }

}


function getNestedDivClass(event) {
  var target = event // Получение элемента, на котором произошло событие (родительского div)
  var nestedDiv = target.querySelector('div'); // Получение вложенного div
  var nestedDivClass = nestedDiv.classList; // Получение класса вложенного div
  assemble_event_activity(nestedDivClass, active='active') // Вывод класса вложенного div в консоль или выполнение других операций

}

function change_smth(query = document.querySelector('.user_actions'), value = getComputedStyle(document.documentElement).getPropertyValue('--width_user_actions')){


}


function onClick2(targetInput) {

  // create invisible dummy input to receive the focus first
  const fakeInput = document.createElement('input')
  fakeInput.setAttribute('type', 'text')
  fakeInput.style.position = 'absolute'
  fakeInput.style.opacity = 0
  fakeInput.style.height = 0
  fakeInput.style.fontSize = '16px' // disable auto zoom

  // you may need to append to another element depending on the browser's auto 
  // zoom/scroll behavior
  document.body.prepend(fakeInput)

  // focus so that subsequent async focus will work
  fakeInput.focus()

  setTimeout(() => {

    // now we can focus on the target input
    targetInput.focus()

    // cleanup
    fakeInput.remove()
    
  }, 700)

}


function animateSlideRight() {
  var main_menu = document.querySelector('.nested_menu');
  main_menu.classList.add('slide-left');
  var searcher = document.querySelector('.search');
  searcher.classList.add('slide-center');
  active_search = true
  var input = document.querySelector(".field_input"); // Замените "myInput" на ID вашего input
  input.style.display = "block"; 
  onClick2(input)       
  

  setTimeout(function() {
        
        
        

        active_search = false
        
        
  }, 800)
  
  // Через определенное время удалите класс, чтобы анимация могла повториться при следующем нажатии
  /*setTimeout(function() {
    box.classList.remove('slide-right');
  }, 10000);*/
}



function animateSlideLeft() {
  var main_menu = document.querySelector('.nested_menu');
  main_menu.classList.remove('slide-left');
  var searcher = document.querySelector('.search');
  searcher.classList.remove('slide-center');

  setTimeout(function() {
        
        
        
        
  }, 700)
  
  // Через определенное время удалите класс, чтобы анимация могла повториться при следующем нажатии
  /*setTimeout(function() {
    box.classList.remove('slide-right');
  }, 10000);*/
}



/*    EVENTS                     */
window.addEventListener('resize', function() {

        resize_vertical_check()

  var screenWidth = window.innerWidth;

  if (menu_active == false) {uncollapse_elem()}

  
});

window.addEventListener("click", function(event){
        

        var input = document.querySelector(".field_input"); // Замените "myInput" на ID вашего input
if (input === document.activeElement) {
} else { setTimeout(function() {
        if (active_search != true) {animateSlideLeft()
                input.removeAttribute('autofocus');
}

}, 10)
        
        
        
        
        
  }
  

});







/*    БЯКИ                     */

