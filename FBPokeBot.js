var pokeCount = 0;
var timer = 0;
var runtimeSec = 0;
var canRun = false;

const MAX_TIME = 800000;
const MIN_TIME = 120000;

function poke()
{
	var pokeLinks =  Array.prototype.slice.call(document.getElementsByTagName("a")).filter(function (goodLink) {
		return (goodLink.innerHTML.contains("Poke Back"));
	});
	for (var i = 0 ; i != pokeLinks.length; i++) {
		if(canRun) {
			pokeLinks[i].click();
			pokeCount++;
		}
	}

	var timeOutMS = Math.floor(Math.random() * (MAX_TIME - MIN_TIME)) + MIN_TIME;
	//console.log("Next poke: "  + moment().add(Math.floor(timeOutMS/1000), 'seconds').format('LTS'));
	timer = Math.floor(timeOutMS/1000);
	setTimeout(countdownTimer,1000);
}

function updateDisplay()
{
	if(document.getElementById("id_cb_enable").checked) {
		canRun = true;
	} else {
		canRun = false;
	}

	var pokeHeader = Array.prototype.slice.call(document.getElementsByTagName("a")).filter(function (goodLink) {
		return (goodLink.innerHTML.contains("Pokes"));
	});
	pokeHeader[1].innerHTML = "<a href='https://github.com/ThomasAriano/FBPokeBot'>Pokes: " + pokeCount + ", Next Poke: " + timer + "s</a>";

	document.getElementById("runtime_div").innerHTML = "Runtime: " + runtimeSec;
}

function countdownTimer()
{
	if(canRun) {
		runtimeSec++;
	}
	if(timer !== 0) {
		if(canRun) {
			timer--;
		}
		updateDisplay();
		setTimeout(countdownTimer,1000);
	} else {
		poke();
	}
}

function paintGUI()
{
	var runtimeDiv = document.createElement("div");
	runtimeDiv.id = "runtime_div";
	runtimeDiv.innerHTML = "0";
	runtimeDiv.style.position = "absolute";
	runtimeDiv.style.zIndex = "999";
	runtimeDiv.style.left = "15px";
	runtimeDiv.style.top = "40px";
	runtimeDiv.style.width = "100px";
	runtimeDiv.style.textAlign = "center";
	runtimeDiv.style.border = "1px #5555ff solid";
	runtimeDiv.style.color = "#5555ff";
	runtimeDiv.style.backgroundColor = "#ffffff";
	runtimeDiv.style.fontSize = "0.7em";
	document.getElementsByClassName("uiHeader _5i1b uiHeaderPage")[0].appendChild(runtimeDiv);

	var infoDiv = document.createElement("div");
	infoDiv.id = "runtime_div";
	infoDiv.innerHTML = "PokeBot v1.0";
	infoDiv.style.position = "absolute";
	infoDiv.style.zIndex = "999";
	infoDiv.style.left = "115px";
	infoDiv.style.top = "40px";
	infoDiv.style.width = "100px";
	infoDiv.style.textAlign = "center";
	infoDiv.style.border = "1px #5555ff solid";
	infoDiv.style.color = "#5555ff";
	infoDiv.style.backgroundColor = "#ffffff";
	infoDiv.style.fontSize = "0.7em";
	document.getElementsByClassName("uiHeader _5i1b uiHeaderPage")[0].appendChild(infoDiv);

	var textBox = Array.prototype.slice.call(document.getElementsByTagName("input")).filter(function (test) {
		return (test.outerHTML.contains("Poke your friends"));
	});
	textBox[0].outerHTML = "<input type='text' class='inputtext' maxlength='100' aria-label='Search'" +
	"placeholder='Find more victims' autocomplete='off' aria-autocomplete='list' aria-expanded='false'"+
	"aria-controls='typeahead_list_u_0_b' aria-haspopup='true' role='combobox' spellcheck='false'>";

	var checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	checkBox.name = "cb_Start";
	checkBox.value = "Enabled";
	checkBox.id = "id_cb_enable";
	checkBox.style.position = "absolute";
	checkBox.style.left = "220px";
	checkBox.style.top = "38px";
	document.getElementsByClassName("uiHeader _5i1b uiHeaderPage")[0].appendChild(checkBox);

	var cbLabel = document.createElement('label');
	cbLabel.htmlFor= "id_cb_enable";
	cbLabel.style.position = "absolute";
	cbLabel.style.left = "240px";
	cbLabel.style.top = "40px";
	cbLabel.appendChild(document.createTextNode('Enable'));
	document.getElementsByClassName("uiHeader _5i1b uiHeaderPage")[0].appendChild(cbLabel);

}

paintGUI();
poke();