const input = document.getElementById("input-field");
const button = document.getElementById("submit")
const content = document.getElementById("content")

function createChat(message, username) {
    const chatDiv = document.createElement("div")

    const name = document.createElement("span")
    name.classList.add("name");
    name.textContent = username;
    chatDiv.appendChild(name);

    const msg = document.createElement("span")
    msg.classList.add("msg")
    msg.innerText = message;
    chatDiv.appendChild(msg);
    
    content.appendChild(chatDiv);
}

const aiMessages = [
    "👋 Hi there! How can I help?", "No problem! Let me connect you to a customer support agent.", "Hi there! I’m Hannah.How can I help you?" 
]
let count = 0;
let lastUser = "chatBot"

function sendMessage() {
    createChat(input.value, "You");
    setTimeout(() => {
        createChat(aiMessages[count], "chatBot");
    }, 2000)
    count++
}
button.addEventListener ("click", sendMessage)