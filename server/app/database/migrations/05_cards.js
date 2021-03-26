console.log('5')

exports.up = function(knex) {
    return knex.schema
    .createTable("cards", table => {
        table.increments('id').notNullable()
        table.integer('character_id', 255).unsigned().notNullable()
        table.integer('location_id', 255).unsigned().notNullable()
        table.integer('episode_id', 255).unsigned().notNullable()
        table.boolean('status', 255).notNullable()

        table.foreign('character_id').references('id').inTable('characters')
        table.foreign('location_id').references('id').inTable('locations')
        table.foreign('episode_id').references('id').inTable('episodes')
    })
}
        

exports.down = async function(knex, Promise) {
    await knex.schema
    .dropTable("cards")
}