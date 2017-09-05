function showPic(whichpic) {
	//检查当前网页是否包含一个ID为placeholder的元素
	if (!document.getElementById("placeholder")) {
		return false;
	}
	//获取图片的href属性
	var source = whichpic.getAttribute("href");
	//获取占位符
	var placeholder = document.getElementById("placeholder");
	// 更新占位符src属性
	placeholder.setAttribute("src",source);
	if (document.getElementById("description")) {
		//获取图片的title属性
		var text = whichpic.getAttribute("title");
		//更新文本描述
		var description = document.getElementById("description");
		//alert(description.firstChild.nodeValue);
		description.firstChild.nodeValue = text;
	}
	return true;
}

function prepareGallery() {
	//检查当前浏览器是否支持getElementsByTagName
	if (!document.getElementsByTagName) {
		return false;
	}
	//检查当前浏览器是否支持getelementById
	if (!document.getElementById) {
		return false;
	}
	//检查当前网页是否包含一个ID为imagegallery的元素
	if (!document.getElementById("imagegallery")) {
		return false;
	}
	//遍历imagegallery元素中的所有a链接
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i <links.length; i++) {
		links[i].onclick = function() {
			//return !showPic(this);或：
			return showPic(this) ? false : true;
		}
	}
}
// window.onload = prepareGallery;

//弹性解决window.onload事件函数：
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

addLoadEvent(prepareGallery);

// function countBodyChildren() {
// 	var body_element = document.getElementsByTagName("body")[0];
// 	alert(body_element.childNodes.length);
// 	alert(body_element.nodeType);
// }
// window.onload = countBodyChildren;