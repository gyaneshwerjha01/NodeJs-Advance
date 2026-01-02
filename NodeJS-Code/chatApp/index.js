const ChatRoom = require("./chatRoom");

const chat = new ChatRoom();

chat.on("join", (user) => {
  console.log(`${user} joined the chat`);
});

chat.on("message", (user, message) => {
  console.log(`${user} : ${message}`);
});

chat.on("leave", (user) => {
  console.log(`${user} left the chat`);
});

chat.join("Alice");
chat.join("bob");

chat.sendMessage("Alice", "Hey bob, how are you");
chat.sendMessage("bob", "Hey Alice, how are you");

chat.leave("Alice");
chat.sendMessage("Alice", "this message will not available");
chat.leave("bob");
