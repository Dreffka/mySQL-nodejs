console.log('6')

exports.up = function(knex) {
    return knex.schema
    .createTable("sets", table => {
        table.increments('id').notNullable()
        table.string('name', 255).notNullable()
        table.integer('rating', 255).notNullable()
    })
}

exports.down = async function(knex, Promise) {
    await knex.schema
    .dropTable("sets")
}