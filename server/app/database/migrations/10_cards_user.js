console.log('10')

exports.up = function(knex) {
    return knex.schema
    .createTable("cards_user", table => {
        table.increments('id').notNullable()
        table.integer('user_id', 255).unsigned().notNullable()
        table.integer('card_id', 255).unsigned().notNullable()
        table.integer('amount', 255).notNullable()

        table.foreign('user_id').references('id').inTable('users')
        table.foreign('card_id').references('id').inTable('cards')
    })
}

exports.down = async function(knex, Promise) {
    await knex.schema
    .dropTable("cards_user")
}