module.exports = app => {
    const chat = require("../controllers/chat.controller.js")
  
    // Create a new Message
    app.post("/chat", chat.create)
  
    // Retrieve all Message
    app.get("/chat", chat.findAll)
  
    // Retrieve a single Message with messageId
    app.get("/chat/:messageId", chat.findOne)
  
    // Delete a Message with messageId
    app.delete("/chat/:messageId", chat.delete)
}