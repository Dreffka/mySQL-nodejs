module.exports = app => {
    const transaction = require("../controllers/transaction.controller.js")
  
    // Create a new Transaction
    app.post("/transaction", transaction.create)
  
    // Retrieve all Transaction
    app.get("/transaction", transaction.findAll)
  
    // Retrieve a single Transaction with transactionId
    app.get("/transaction/:transactionId", transaction.findOne)
}