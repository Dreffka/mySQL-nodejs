const sql = require('./db')

const Chat = function(chat) {
    this.user_id = chat.user_id
    this.message = chat.message
    this.created_at = new Date()
}

  Chat.create = (newMessage, result) => {
    sql.query("INSERT INTO chat SET ?", newMessage, (err, res) => {
      if (err) {
        console.log("error: ", err)
        result(err, null)
        return
      }
  
      console.log("created message: ", { id: res.insertId, ...newMessage })
      result(null, { id: res.insertId, ...newMessage  })
    })
  }
  
  Chat.findById = (messageId, result) => {
    sql.query(`SELECT * FROM chat WHERE id = ${messageId}`, (err, res) => {
      if (err) {
        console.log("error: ", err)
        result(err, null)
        return
      }
  
      if (res.length) {
        console.log("found messages: ", res[0]);
        result(null, res[0])
        return
      }
  
      // not found Messages with the id
      result({ kind: "not_found" }, null)
    })
  }
  
  Chat.getAll = result => {
    sql.query("SELECT * FROM chat", (err, res) => {
      if (err) {
        console.log("error: ", err)
        result(null, err);
        return
      }
  
      console.log("messages: ", res)
      result(null, res)
    })
  }
  
  
  Chat.remove = (id, result) => {
    sql.query("DELETE FROM chat WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err)
        result(null, err)
        return
      }
  
      if (res.affectedRows == 0) {
        // not found Messages with the id
        result({ kind: "not_found" }, null)
        return
      }
  
      console.log("deleted message with id: ", id)
      result(null, res)
    })
  }

module.exports = Chat