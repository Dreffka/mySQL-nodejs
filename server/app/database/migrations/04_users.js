console.log('4')

exports.up = function(knex) {
    return knex.schema
    .createTable("users", table => {
        table.increments('id').notNullable()
        table.string('username', 255).notNullable()
        table.string('login', 255).notNullable()
        table.string('password', 255).notNullable()
        table.integer('card_points').notNullable()
        table.string('role', 255).notNullable()
        table.string('created_at', 255).notNullable()
    })
}

exports.down = async function(knex, Promise) {
    await knex.schema
    .dropTable("users")
}