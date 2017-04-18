    var pokeCount = 0;
    var timer = 0;
    var runtimeSec = 0;

    function poke()
    {
        var pokeLinks =  Array.prototype.slice.call(document.getElementsByTagName("a")).filter(function (goodLink) {
            return (goodLink.innerHTML.contains("Poke Back"));
        });
        for (var i = 0 ; i != pokeLinks.length; i++) {
            pokeLinks[i].click();
            pokeCount++;
        }

        var timeOutMS = Math.floor(Math.random() * (500000 - 40000)) + 40000;
        console.log("Next poke: "  + moment().add(Math.floor(timeOutMS/1000), 'seconds').format('LTS'));
        timer = Math.floor(timeOutMS/1000);
        setTimeout(countdownTimer,1000);
    }

    function updateDisplay()
    {
        var pokeHeader = Array.prototype.slice.call(document.getElementsByTagName("a")).filter(function (goodLink) {
            return (goodLink.innerHTML.contains("Pokes"));
        });
        pokeHeader[1].innerHTML = "<a href='/pokes/'>Pokes: " + pokeCount + ", Next Poke: " + timer + "s</a>";

        document.getElementById("runtime_div").innerHTML = "Runtime: " + runtimeSec;
    }

    function countdownTimer()
    {
        runtimeSec++;
        if(timer !== 0) {
            timer--;
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
        runtimeDiv.style.top = "43px";
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
        infoDiv.style.top = "43px";
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
    }

    paintGUI();
    poke();