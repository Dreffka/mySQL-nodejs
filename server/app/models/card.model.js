const sql = require('./db')

const Card = function(card) {
    this.character_id = card.character_id
    this.location_id = card.location_id
    this.episode_id = card.episode_id
    this.status = card.status
}

  Card.create = (newCard, result) => {
    sql.query("INSERT INTO cards SET ?", newCard, (err, res) => {
      if (err) {
        console.log("error: ", err)
        result(err, null)
        return
      }
  
      console.log("created card: ", { id: res.insertId, ...newCard })
      result(null, { id: res.insertId, ...newCard  })
    })
  }
  
  Card.findById = (cardId, result) => {
    sql.query(`SELECT * FROM cards WHERE id = ${cardId}`, (err, res) => {
      if (err) {
        console.log("error: ", err)
        result(err, null)
        return
      }
  
      if (res.length) {
        console.log("found cards: ", res[0]);
        result(null, res[0])
        return
      }
  
      // not found Cards with the id
      result({ kind: "not_found" }, null)
    })
  }
  
  Card.getAll = result => {
    sql.query("SELECT * FROM cards", (err, res) => {
      if (err) {
        console.log("error: ", err)
        result(null, err);
        return
      }
  
      console.log("cards: ", res)
      result(null, res)
    })
  }
  
  
  Card.remove = (id, result) => {
    sql.query("DELETE FROM cards WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err)
        result(null, err)
        return
      }
  
      if (res.affectedRows == 0) {
        // not found Card with the id
        result({ kind: "not_found" }, null)
        return
      }
  
      console.log("deleted card with id: ", id)
      result(null, res)
    })
  }

module.exports = Card