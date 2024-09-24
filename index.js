const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");

let userMessage;


const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p> ${message} </p>` : `<span class="material-symbols-outlined">smart_toy</span><p> ${message} </p>`;
    chatLi.innerHTML=chatContent;
    return chatLi;
}

const handleChat = () => {
    userMessage=chatInput.value.trim();
   if(!userMessage) return;
   chatInput.value="";

   chatbox.appendChild(createChatLi(userMessage,"outgoing"));

   setTimeout(()=> {
    chatbox.appendChild(createChatLi("Hey","incoming"));
   },600);

}
// Function to inject the CSS into the <head> dynamically
const insertStyles = () => {
    const css = `
      @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');
      
      .chatbot {
          width: 420px;
          background: white;
          position: fixed;
          right: 40px;
          bottom: 100px;
          overflow: hidden;
          transform: scale(0.5);
          opacity: 0;
          pointer-events: none;
          transform-origin: bottom right;
          border-radius: 15px;
          box-shadow: 0 0 128px 0 rgba(0,0,0,0.1), 0 32px 64px -48px rgba(0,0,0,0.5);
          transition: all 0.1s ease;
      }
      .show-chatbot .chatbot {
          transform: scale(1);
          opacity: 1;
          pointer-events: auto;
      }
      .chatbot header {
          background: silver;
          padding: 16px 0;
          text-align: center;
          position: relative;
      }
      .chatbot header h2 {
          color: #fff;
          font-size: 1.4rem;
      }
      .chatbot header span {
          position: absolute;
          right: 20px;
          top: 50%;
          color: #fff;
          cursor: pointer;
          display: none;
          transform: translateY(-50%);
      }
      .chatbot .chatbox {
          height: 250px;
          overflow-y: auto;
          padding: 30px 20px 70px;
      }
      .chatbot .chat {
          display: flex;
      }
      .chat .outgoing {
          margin: 20px 0;
          justify-content: flex-end;
      }
      .chatbox .chat p {
          padding: 12px 16px;
          color: white;
          border-radius: 10px 10px 0 10px;
          font-size: 0.95rem;
          background: black;
          max-width: 75%;
      }
      .chatbot p {
          padding: 12px 16px;
          color: white;
          border-radius: 10px 10px 0 10px;
          font-size: 0.95rem;
          background: silver;
          max-width: 75%;
      }
      .chatbot .incoming span {
          height: 32px;
          width: 32px;
          color: #fff;
          background: black;
          text-align: center;
          line-height: 32px;
          border-radius: 4px;
          margin: 0 10px 7px 0;
      }
      .chatbot .chat-input {
          position: absolute;
          bottom: 0;
          width: 100%;
          background: #fff;
          border-top: 1px solid #ccc;
          padding: 5px 20px;
          gap: 5px;
      }
      .chat-input textarea {
          border: none;
          height: 15px;
          width: 85%;
          outline: none;
          font-size: 0.95rem;
          resize: none;
          padding: 16px 15px 16px 0;
      }
      .chat-input span {
          color: black;
          font-size: 1.35rem;
          cursor: pointer;
          align-self: flex-end;
          height: 55px;
          line-height: 55px;
      }
      .chatbot-toggler {
          position: fixed;
          right: 40px;
          bottom: 35px;
          height: 50px;
          width: 50px;
          background: silver;
          color: #fff;
          border-radius: 50%;
          border: none;
          outline: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
      }
      .show-chatbot .chatbot-toggler {
          transform: rotate(90deg);
      }
      .chatbot-toggler span {
          position: absolute;
      }
      .show-chatbot .chatbot-toggler span:first-child,
      .chatbot-toggler span:last-child {
          opacity: 0;
      }
      .show-chatbot .chatbot-toggler span:last-child {
          opacity: 1;
      }
  
      @media(max-width: 490px) {
          .chatbot {
              right: 0;
              bottom: 0;
              width: 100%;
              height: 100%;
              border-radius: 0;
          }
          .chatbot .chatbot {
              height: 90%;
          }
          .chatbot header span {
              display: block;
          }
      }
    `;
  
    // Create a <style> element
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    
    // Add the CSS to the <style> element
    styleSheet.appendChild(document.createTextNode(css));
  
    // Append the <style> element to the <head> section
    document.head.appendChild(styleSheet);
  };
  
  // Call this function to inject the styles into the document
  insertStyles();
  
  








sendChatBtn.addEventListener("click", handleChat);
chatbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
