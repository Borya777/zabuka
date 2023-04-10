
var current_carousel_elem = "None";


function active_elem(elem_query_selector = '#carousels_elem_1'){
	if (current_carousel_elem != "None"){document.querySelector(current_carousel_elem).className = 'image_cars'}
	document.querySelector(elem_query_selector).className = "activision"
	//alert(document.querySelector("#current").src)
	document.querySelector("#current").src = document.querySelector(elem_query_selector).src
	current_carousel_elem = elem_query_selector
}




active_elem()





function description(elem_query_selector, span_class_id){

	if (document.querySelector(elem_query_selector).className == "")
		{document.querySelector(elem_query_selector).className = "show";
	document.querySelector(elem_query_selector).style.transform = "rotate(-90deg)";
		 document.querySelector(span_class_id).style.height = '150px'
		 if (window.innerWidth < 450){document.querySelector(span_class_id).style.height = '200px'
		}}
	else {document.querySelector(elem_query_selector).className = "";
	document.querySelector(elem_query_selector).style.transform = "rotate(90deg)";
	 document.querySelector(span_class_id).style.height = '0px'}
}







function swipe(elem_query_selector) {
    var url=document.querySelector(elem_query_selector).getAttribute('src');
   window.open(url,'new window', "width=1200, height=1200, left=200, top=200, toolbar=no");
}





function counter(znak, cur_elem = "#buttonCountNumber"){
	if (znak == "-"){var elem = -1}
	else {var elem = 1}
	cur_val = (Number(document.querySelector(cur_elem).textContent) + elem)
	if (cur_val > 0) {document.querySelector(cur_elem).textContent = "" + cur_val}
}






function get_elem(elem_query_selector = '.carousel__viewport', attr = 'counter-reset'){
var element = document.querySelector(elem_query_selector),
    style = window.getComputedStyle(element),
    res = style.getPropertyValue(attr);
    alert(res)
}




function get_item(){
	ret = document.querySelector('.carousel__viewport').style.width;
	alert(ret)
}



