console.log('9')

exports.up = function(knex) {
    return knex.schema
    .createTable("lots", table => {
        table.increments('id').notNullable()
        table.integer('card_id', 255).unsigned().notNullable()
        table.integer('user_id', 255).unsigned().notNullable()
        table.integer('initial_rate', 255).notNullable()
        table.integer('min_step', 255).notNullable()
        table.integer('price', 255).notNullable()
        table.integer('max_duretion', 255).notNullable()
        table.integer('min_extension', 255).notNullable()
        table.boolean('admin_lot', 255).notNullable()

        table.foreign('card_id').references('id').inTable('cards')
        table.foreign('user_id').references('id').inTable('users')
    })
}

exports.down = async function(knex, Promise) {
    await knex.schema
    .dropTable("lots")
}