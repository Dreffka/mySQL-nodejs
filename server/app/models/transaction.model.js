const sql = require('./db')

const Transaction = function(lot) {
    this.card_id = lot.card_id
    this.user_id = lot.user_id
    this.initial_rate = lot.initial_rate
    this.min_step = lot.min_step
    this.price = lot.price
    this.max_duration = lot.max_duration
    this.min_extension = lot.min_extension
    this.admin_lot = lot.admin_lot
}


  Transaction.create = (newTransaction, result) => {
    sql.query("INSERT INTO transaction SET ?", newTransaction, (err, res) => {
      if (err) {
        console.log("error: ", err)
        result(err, null)
        return
      }
  
      console.log("created transaction: ", { id: res.insertId, ...newTransaction })
      result(null, { id: res.insertId, ...newTransaction })
    })
  }
  
  Transaction.findById = (transactionId, result) => {
    sql.query(`SELECT * FROM transaction WHERE id = ${transactionId}`, (err, res) => {
      if (err) {
        console.log("error: ", err)
        result(err, null)
        return
      }
  
      if (res.length) {
        console.log("found transaction: ", res[0]);
        result(null, res[0])
        return
      }
  
      // not found Transaction with the id
      result({ kind: "not_found" }, null)
    })
  }
  
  Transaction.getAll = result => {
    sql.query("SELECT * FROM transaction", (err, res) => {
      if (err) {
        console.log("error: ", err)
        result(null, err);
        return
      }
  
      console.log("lots: ", res)
      result(null, res)
    })
  }
  
  

module.exports = Transaction