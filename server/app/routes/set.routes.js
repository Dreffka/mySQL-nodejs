module.exports = app => {
    const sets = require("../controllers/set.controller.js")
  
    // Create a new Set
    app.post("/sets", sets.create)
  
    // Retrieve all Sets
    app.get("/sets", sets.findAll)
  
    // Retrieve a single Set with setId
    app.get("/sets/:setId", sets.findOne)
  
    // Delete a Set with setId
    app.delete("/sets/:setId", sets.delete)
}