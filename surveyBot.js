function clickAll() {
	var inputs = document.getElementsByTagName("input");
	console.log("Length: " + inputs.length);

	for(var i=0;i<inputs.length;i++) {
		if(inputs[i].type == "radio" && inputs[i].getAttribute("qsox") == "4") {
			inputs[i].click();
		}
	}
}

clickAll();