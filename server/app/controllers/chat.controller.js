const Chat = require("../models/chat.model.js")

// Create and Save a new Message
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
      }
    
      // Create a Message
      const chat = new Chat({
        user_id: req.body.user_id,
        message: req.body.message
      })
    
      // Save Message in the database
      Chat.create(chat, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Message."
          })
        else res.send(data)
      })
}

// Retrieve all Messages from the database.
exports.findAll = (req, res) => {
    Chat.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving messages."
          })
        else res.send(data)
      })
}

// Find a single Message with a messageId
exports.findOne = (req, res) => {
    Chat.findById(req.params.messageId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Message with id ${req.params.messageId}.`
            })
          } else {
            res.status(500).send({
              message: "Error retrieving Message with id " + req.params.messageId
            })
          }
        } else res.send(data)
      })
}


// Delete a Message with the specified messageId in the request
exports.delete = (req, res) => {
    Chat.remove(req.params.messageId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Message with id ${req.params.messageId}.`
            })
          } else {
            res.status(500).send({
              message: "Could not delete Message with id " + req.params.messageId
            })
          }
        } else res.send({ message: `Message was deleted successfully!` })
      })
}
