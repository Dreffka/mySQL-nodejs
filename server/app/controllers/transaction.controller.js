const Transaction = require("../models/transaction.model.js")

// Create and Save a new Transaction
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
      }
    
      // Create a Transaction
      const transaction = new Transaction({
        name: req.body.name,
        rating: req.body.rating
      })
    
      // Save Transaction in the database
      Transaction.create(transaction, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Transaction."
          })
        else res.send(data)
      })
}

// Retrieve all Transactions from the database.
exports.findAll = (req, res) => {
    Transaction.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Transactions."
          })
        else res.send(data)
      })
}

// Find a single Transaction with a transactionId
exports.findOne = (req, res) => {
    Transaction.findById(req.params.transactionId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Transaction with id ${req.params.transactionId}.`
            })
          } else {
            res.status(500).send({
              message: "Error retrieving Transaction with id " + req.params.transactionId
            })
          }
        } else res.send(data)
      })
}