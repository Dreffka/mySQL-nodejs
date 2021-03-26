const sql = require('./db')

const Lot = function(lot) {
    this.card_id = lot.card_id
    this.user_id = lot.user_id
    this.initial_rate = lot.initial_rate
    this.min_step = lot.min_step
    this.price = lot.price
    this.max_duration = lot.max_duration
    this.min_extension = lot.min_extension
    this.admin_lot = lot.admin_lot
}


  Lot.create = (newLot, result) => {
    sql.query("INSERT INTO lots SET ?", newLot, (err, res) => {
      if (err) {
        console.log("error: ", err)
        result(err, null)
        return
      }
  
      console.log("created lot: ", { id: res.insertId, ...newLot })
      result(null, { id: res.insertId, ...newLot  })
    })
  }
  
  Lot.findById = (lotId, result) => {
    sql.query(`SELECT * FROM lots WHERE id = ${lotId}`, (err, res) => {
      if (err) {
        console.log("error: ", err)
        result(err, null)
        return
      }
  
      if (res.length) {
        console.log("found lots: ", res[0]);
        result(null, res[0])
        return
      }
  
      // not found Lots with the id
      result({ kind: "not_found" }, null)
    })
  }
  
  Lot.getAll = result => {
    sql.query("SELECT * FROM lots", (err, res) => {
      if (err) {
        console.log("error: ", err)
        result(null, err);
        return
      }
  
      console.log("lots: ", res)
      result(null, res)
    })
  }
  
  

module.exports = Lot