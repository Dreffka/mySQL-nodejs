console.log('1')
exports.up = function(knex) {
    return knex.schema
    .createTable("characters", table => {
        table.increments('id').notNullable()
        table.string('name', 255).notNullable()
        table.string('status', 255).notNullable()
        table.string('species', 255).notNullable()
        table.string('type', 255).notNullable()
        table.string('gender', 255).notNullable()
        table.string('url', 255).notNullable()
        table.string('created_at', 255).notNullable()
    })
}

exports.down = async function(knex, Promise) {
    await knex.schema
    .dropTable("characters")
}
