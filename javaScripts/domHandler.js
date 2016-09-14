var Chatty = (function(newChatty) {

	var privateArray = [];
	var counter = 0;

	var inputMssg = document.getElementById("userInput");
	var clearButton = document.getElementById("clearBtn");
	var darkButton = document.getElementById("darkBtn");
	var largeButton = document.getElementById("largeBtn");
	var outputMessage = document.getElementById("comment2");
	var deleteButton = document.getElementsByClassName("delete");

	newChatty.fillArray = function(){
			var inputStr = document.getElementById("userInput").value;
			var message = {id:counter,message:inputStr};
			privateArray.push(message);
			counter++
			console.log(privateArray);
	}

	newChatty.printMessage = function(){
		var userMssg = inputMssg.value;
		outputMessage.innerHTML += "<div>" + userMssg + "<button class='delete' >Delete Message</button></div>";
		deleteListenerEvent();
	}
	

	newChatty.enterKeyPressed = function(keypress){
		if (keypress.which === 13) {
			keypress.preventDefault();
			newChatty.printMessage();
		 	var inputStr = document.getElementById("userInput").value;
			var message = {id:counter,message:inputStr};
			newChatty.fillArray(message);
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

	function deleteMssg(event){
	var parentDiv = this.parentNode;
	this.parentNode.parentNode.removeChild(parentDiv);
	}

	function deleteListenerEvent(){
		for (var i = 0; i < deleteButton.length; i+=1) {
			deleteButton[i].addEventListener("click", deleteMssg);
		}
	}

	newChatty.clearAll = function(){
        outputMessage.innerHTML = "";
    }
	darkButton.addEventListener("click", newChatty.addDark);
	largeButton.addEventListener("click", newChatty.addLarge);
	clearButton.addEventListener("click", newChatty.clearAll);
	document.addEventListener("keypress", newChatty.enterKeyPressed);

	return newChatty;

})(Chatty || {})
