var Chatty = (function() {
	
	function executeThisCodeIfXHRFails () {
	  console.log("An error occurred while transferring");
	}

	var privateArray = [];
	var counter = 0;

	function executeThisCodeAfterFileLoaded () {
		console.log("executeThisCodeAfterFileLoaded it loaded");
  	  var messageData = JSON.parse(this.responseText);
	
		var contentEl = document.getElementById("comment2")

		
  		var storedMessage;

		for (var i = 0; i < messageData.message.length; i++) {
    		storedMessage = messageData.message[i];
        	var insideDiv = `${storedMessage.message}<button class='delete'>Delete Message</button>`;
      		contentEl.innerHTML += "<div class='mssg'>"+ insideDiv +"</div>";
      		deleteListenerEvent();
      		fillArray(storedMessage.message);
  		};
	}

	function fillArray(Frommessage){
			var message = {id:counter,message:Frommessage};
			privateArray.push(message);
			counter++
			console.log(privateArray);
	}

	function deleteMssg(event){
	var parentDiv = this.parentNode;
	this.parentNode.parentNode.removeChild(parentDiv);
	}

	function deleteListenerEvent(){
		var deleteButton = document.getElementsByClassName("delete");
		for (var i = 0; i < deleteButton.length; i+=1) {
			deleteButton[i].addEventListener("click", deleteMssg);
		}
	}

	function executeThisCodeWhenChunksArrive () {
	  
	}


	var myRequest = new XMLHttpRequest();

	myRequest.addEventListener("load", executeThisCodeAfterFileLoaded); //Callback
	myRequest.addEventListener("error", executeThisCodeIfXHRFails);
	myRequest.addEventListener("progress", executeThisCodeWhenChunksArrive);
	myRequest.open("GET", "javaScripts/messages.json");
	myRequest.send();
	
	return {

	// 	fillArray: function(Frommessage){
	// 		var inputStr = document.getElementById("userInput").value;
		
	// 		var message = {id:counter,message:inputStr};
	// 		privateArray.push(message);
	// 		privateArray.push(Frommessage);
	// 		counter++
	// 		console.log(privateArray);
	// }



	};
})()
