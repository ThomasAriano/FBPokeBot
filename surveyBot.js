function clickAll() {
	var inputs = document.getElementsByTagName("input");
	console.log("Length: " + inputs.length);

	for(var i=0;i<inputs.length;i++) {
		if(inputs[i].type == "radio" && (inputs[i].value == "340" || inputs[i].value == "350" || inputs[i].value == "360")) {
			inputs[i].click();
		}
	}
}

clickAll();