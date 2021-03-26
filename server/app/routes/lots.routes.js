module.exports = app => {
    const lots = require("../controllers/lot.controller.js")
  
    // Create a new Lot
    app.post("/lots", lots.create)
  
    // Retrieve all Lots
    app.get("/lots", lots.findAll)
  
    // Retrieve a single Lot with lotId
    app.get("/lots/:lotId", lots.findOne)
}