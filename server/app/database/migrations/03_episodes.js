console.log('3')

exports.up = function(knex) {
    return knex.schema
    .createTable("episodes", table => {
        table.increments('id').notNullable()
        table.string('name', 255).notNullable()
        table.string('air_date', 255).notNullable()
        table.string('episode', 255).notNullable()
        table.string('character', 255).notNullable()
        table.string('url', 255).notNullable()
        table.string('created_at', 255).notNullable()
    })
}

exports.down = async function(knex, Promise) {
    await knex.schema
    .dropTable("episodes")
}