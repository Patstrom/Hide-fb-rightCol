function injectCss(cssToInject) {
	style_element = document.createElement("style");
	style_element.innerText =cssToInject;
	document.documentElement.insertBefore(style_element,null);
}

function remove(){
	var css ='#rightCol { display:none !important; }';
	try {
		injectCss(css);
	}
	catch(err){
		console.log(err);
	}
}

window.onload = remove;

