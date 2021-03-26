const sql = require('./db')

const Set = function(set) {
    this.name = set.name
    this.rating = set.rating
}

  Set.create = (newSet, result) => {
    sql.query("INSERT INTO sets SET ?", newSet, (err, res) => {
      if (err) {
        console.log("error: ", err)
        result(err, null)
        return
      }
  
      console.log("created set: ", { id: res.insertId, ...newSet })
      result(null, { id: res.insertId, ...newSet  })
    })
  }
  
  Set.findById = (setId, result) => {
    sql.query(`SELECT * FROM sets WHERE id = ${setId}`, (err, res) => {
      if (err) {
        console.log("error: ", err)
        result(err, null)
        return
      }
  
      if (res.length) {
        console.log("found sets: ", res[0]);
        result(null, res[0])
        return
      }
  
      // not found Sets with the id
      result({ kind: "not_found" }, null)
    })
  }
  
  Set.getAll = result => {
    sql.query("SELECT * FROM sets", (err, res) => {
      if (err) {
        console.log("error: ", err)
        result(null, err);
        return
      }
  
      console.log("sets: ", res)
      result(null, res)
    })
  }
  
  
  Set.remove = (id, result) => {
    sql.query("DELETE FROM sets WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err)
        result(null, err)
        return
      }
  
      if (res.affectedRows == 0) {
        // not found Set with the id
        result({ kind: "not_found" }, null)
        return
      }
  
      console.log("deleted set with id: ", id)
      result(null, res)
    })
  }

module.exports = Set