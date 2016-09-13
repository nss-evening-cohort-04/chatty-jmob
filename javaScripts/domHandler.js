var Chatty = (function(newChatty) {

	var inputMssg = document.getElementById("userInput");
	var clearButton = document.getElementById("clearBtn");
	var darkButton = document.getElementById("darkBtn");
	var largeButton = document.getElementById("largeBtn");
	var outputMessage = document.getElementById("comment2");

	newChatty.printMessage = function(){
		var userMssg = inputMssg.value;
		outputMessage.innerHTML += "<div>" + userMssg + "<p><button class='delete' >Delete Message</button></div></p>";
	}

	newChatty.enterKeyPressed = function(keypress){
		if (keypress.which === 13) {
		keypress.preventDefault();
			newChatty.printMessage();
			inputMssg.value = "";
		}
	}

	newChatty.addDark = function(){
		var element = document.getElementById("body");
		element.classList.toggle("makeDark");
		var div = document.getElementById("formGroup")
        div.classList.toggle("textDark");
	}

	newChatty.addLarge = function(){
		var element = document.getElementById("comment2");
		element.classList.toggle("makeLarge");
	}

	darkButton.addEventListener("click", newChatty.addDark);
	largeButton.addEventListener("click", newChatty.addLarge);
	darkButton.addEventListener("click", newChatty.addDark);
	document.addEventListener("keypress", newChatty.enterKeyPressed);

	return newChatty;

})(Chatty || {})
