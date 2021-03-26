console.log('11')

exports.up = function(knex) {
    return knex.schema
    .createTable("transaction", table => {
        table.increments('id').notNullable()
        table.integer('user_id', 255).unsigned().notNullable()
        table.integer('lot_id', 255).unsigned().notNullable()
        table.integer('amount', 255).notNullable()
        table.integer('created_at', 255).notNullable()


        table.foreign('user_id').references('id').inTable('users')
        table.foreign('lot_id').references('id').inTable('lots')
    })
}

exports.down = async function(knex, Promise) {
    await knex.schema
    .dropTable("transaction")
}