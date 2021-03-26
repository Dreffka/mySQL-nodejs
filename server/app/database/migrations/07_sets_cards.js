console.log('7')

exports.up = function(knex) {
    return knex.schema
    .createTable("sets_cards", table => {
        table.integer('set_id', 255).unsigned().notNullable()
        table.integer('card_id', 255).unsigned().notNullable()

        table.foreign('set_id').references('id').inTable('sets')
        table.foreign('card_id').references('id').inTable('cards')
    })
}

exports.down = async function(knex, Promise) {
    await knex.schema
    .dropTable("sets_cards")
}