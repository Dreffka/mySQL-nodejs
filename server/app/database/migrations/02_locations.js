console.log('2')

exports.up = function(knex) {
    return knex.schema
    .createTable("locations", table => {
        table.increments('id').notNullable()
        table.string('name', 255).notNullable()
        table.string('type', 255).notNullable()
        table.string('dimension', 255).notNullable()
        table.string('resident', 255).notNullable()
        table.string('url', 255).notNullable()
        table.string('created_at', 255).notNullable()
    })
}

exports.down = async function(knex, Promise) {
    await knex.schema
    .dropTable("locations")
}