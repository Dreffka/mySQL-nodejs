const Lot = require("../models/lots.model.js")

// Create and Save a new Lot
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
      }
    
      // Create a Lot
      const lot = new Lot({
        name: req.body.name,
        rating: req.body.rating
      })
    
      // Save Lot in the database
      Lot.create(lot, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Lot."
          })
        else res.send(data)
      })
}

// Retrieve all Lots from the database.
exports.findAll = (req, res) => {
    Lot.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Lots."
          })
        else res.send(data)
      })
}

// Find a single Lot with a lotId
exports.findOne = (req, res) => {
    Lot.findById(req.params.lotId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Lot with id ${req.params.lotId}.`
            })
          } else {
            res.status(500).send({
              message: "Error retrieving Lot with id " + req.params.lotId
            })
          }
        } else res.send(data)
      })
}


