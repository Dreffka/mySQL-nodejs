module.exports = app => {
    const cards = require("../controllers/card.controller.js")
  
    // Create a new Card
    app.post("/cards", cards.create)
  
    // Retrieve all Cards
    app.get("/cards", cards.findAll)
  
    // Retrieve a single Card with cardId
    app.get("/cards/:cardId", cards.findOne)
  
    // Delete a Card with cardId
    app.delete("/cards/:cardId", cards.delete)
}