const Set = require("../models/set.model.js")

// Create and Save a new Set
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
      }
    
      // Create a Set
      const set = new Set({
        name: req.body.name,
        rating: req.body.rating
      })
    
      // Save Set in the database
      Set.create(set, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Set."
          })
        else res.send(data)
      })
}

// Retrieve all Sets from the database.
exports.findAll = (req, res) => {
    Set.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving sets."
          })
        else res.send(data)
      })
}

// Find a single Set with a setId
exports.findOne = (req, res) => {
    Set.findById(req.params.setId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Set with id ${req.params.setId}.`
            })
          } else {
            res.status(500).send({
              message: "Error retrieving Set with id " + req.params.setId
            })
          }
        } else res.send(data)
      })
}


// Delete a Set with the specified setId in the request
exports.delete = (req, res) => {
    Set.remove(req.params.setId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Set with id ${req.params.setId}.`
            })
          } else {
            res.status(500).send({
              message: "Could not delete Set with id " + req.params.setId
            })
          }
        } else res.send({ message: `Set was deleted successfully!` })
      })
}
