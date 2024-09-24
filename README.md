# chatbot html structure
Add this code into the html file for the html structure of an toggle bar and create a new js file and name it whatever you want and make sure you change the script src code according to that







<!DOCTYPE html>
<html lang="en" style="scroll-behavior: smooth;">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chatbot</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
   </head>
            <body>
    
  
<button class="chatbot-toggler">
    <span class="material-symbols-outlined">comment</span>
    <span class="material-symbols-outlined">close</span>
</button>
    <div class="chatbot">
<header>
    <h2>Chatbot</h2>
    <span class=" close-btn material-symbols-outlined">close</span>
</header>
    <ul class="chatbox">
    <li class="chat incoming">
    <span class="material-symbols-outlined">smart_toy</span>
    <p>Hi There <br>How can i help you today?</p>
    </li>
    <li class="chat outgoing"></li>
    </li>
    </ul>
    <div class="chat-input">
        <textarea placeholder="Enter a message..."></textarea>
        <span id="send-btn" class="material-symbols-outlined">send</span>
    </div>
</div>


<script src="index.js" defer></script>

</body>
</html>