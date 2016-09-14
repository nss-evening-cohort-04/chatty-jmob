var Chatty = (function() {
	
	function executeThisCodeIfXHRFails () {
	  console.log("An error occurred while transferring");
	}

	function executeThisCodeAfterFileLoaded () {
		console.log("executeThisCodeAfterFileLoaded it loaded");
  	  var messageData = JSON.parse(this.responseText);
	
		var contentEl = document.getElementById("comment2")

		
  		var storedMessage;

		for (var i = 0; i < messageData.message.length; i++) {
    		storedMessage = messageData.message[i];
    		console.log(storedMessage);
        	var insideDiv = `<p> ${storedMessage.message}<button id='delete' class='delete'>Delete Message</button></p>`;
      		contentEl.innerHTML += "<div>"+ insideDiv +"</div>";
  		};

  		// contentEl.innerHTML = outputMessage;
	}

	function executeThisCodeWhenChunksArrive () {
	  
	}


	var myRequest = new XMLHttpRequest();

	myRequest.addEventListener("load", executeThisCodeAfterFileLoaded); //Callback
	myRequest.addEventListener("error", executeThisCodeIfXHRFails);
	myRequest.addEventListener("progress", executeThisCodeWhenChunksArrive);
	myRequest.open("GET", "javaScripts/messages.json");
	myRequest.send();
	
	return {};
})()
