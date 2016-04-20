function remove(){
	try {
		document.getElementById("rightCol").innerHTML = '';
	}
	catch(err){
		alert("failed");
	}

	console.log('Removed rightCol');
}

remove();

