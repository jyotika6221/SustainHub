function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");
  
    // Add user message to chat box
    var userMessage = document.createElement("div");
    userMessage.className = "chat-message user-message";
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);
  
    // Check for keywords in user input and respond accordingly
    var botResponse;
    if (userInput.toLowerCase().includes("hello") || userInput.toLowerCase().includes("hi")) {
      botResponse = "Hello! How can I assist you today?";
    } else if (userInput.toLowerCase().includes("how are you")) {
      botResponse = "I'm just a bot, so I don't have feelings, but thanks for asking!";
    } else if (userInput.toLowerCase().includes("what is recycling")) {
      botResponse = "Recycling is the process of converting waste materials into reusable materials to prevent them from ending up in landfills.";
    } else if (userInput.toLowerCase().includes("how to manage waste")) {
      botResponse = "To manage waste effectively, you can reduce, reuse, and recycle materials whenever possible. Additionally, proper disposal methods such as composting organic waste and using designated recycling facilities can help.";
    }else if (userInput.toLowerCase().includes("is glass recyclable")) {
      botResponse = "Glass is 100% recyclable and can be recycled endlessly without losing quality";
   }else if (userInput.toLowerCase().includes("recycling process")) {
      botResponse = "To recycle, you can separate materials like paper, glass, and plastic and place them in designated recycling bins.";
      }else if (userInput.toLowerCase().includes("what happens to recycled paper")) {
      botResponse = "Recycled paper can be turned into new paper products through a pulping process.";
        }else if (userInput.toLowerCase().includes("what is the impact of recycling on climate change")) {
      botResponse = "Recycling is important because it reduces the amount of waste in landfills and helps combat pollution.";
      }else {
      botResponse = "I'm sorry, I don't understand that question.";
    }
  
    // Simulate bot response with delay
    setTimeout(function() {
      var botMessage = document.createElement("div");
      botMessage.className = "chat-message bot-message";
      botMessage.textContent = botResponse;
      chatBox.appendChild(botMessage);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
  
    // Clear user input
    document.getElementById("user-input").value = "";
  }
  