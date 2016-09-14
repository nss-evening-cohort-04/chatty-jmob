var Chatty = (function() {
	
	function executeThisCodeIfXHRFails () {
	  console.log("An error occurred while transferring");
	}

	function executeThisCodeWhenChunksArrive () {
	}

	// var privateArray = [];
	// var counter = 0;

	function executeThisCodeAfterFileLoaded () {
	  console.log("executeThisCodeAfterFileLoaded it loaded");
  	  var messageData = JSON.parse(this.responseText);
	
		var contentEl = document.getElementById("comment2")

		var outputMessage = "";
  		var storedMessage;

		for (var i = 0; i < messageData.message.length; i++) {
    		storedMessage = messageData.message[i];

    	
    		outputMessage += "<div>";
        	outputMessage += `<p> ${storedMessage.message}<button class='delete'>Delete Message</button></p>`;
      		outputMessage += "</div>";
      	
  		};
  		
  		// for (var i = 0; i < messageData.length; i++) {
  		// 	Chatty.fillArray(messageData.message[i]);
  		// }
  		
  		contentEl.innerHTML = outputMessage;
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
