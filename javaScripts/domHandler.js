var inputMssg = document.getElementById("userInput");
var clearButton = document.getElementById("clearBtn");
var darkButton = document.getElementById("darkBtn");
var largeButton = document.getElementById("largeBtn");
var outputMessage = document.getElementById("comment2");

function printMessage(){
	var userMssg = inputMssg.value;
	outputMessage.innerHTML += "<div>" + userMssg + "<button class='delete'>Delete Message</button></div>";
}

function enterKeyPressed(keypress){
	if (keypress.which === 13) {
	keypress.preventDefault();
		printMessage();
		inputMssg.value = "";
	}
}

// darkButton.addEventListener("click", someFunction);
// largeButton.addEventListener("click", anotherFunction)
document.addEventListener("keypress", enterKeyPressed);