console.log('8')

exports.up = function(knex) {
    return knex.schema

    .createTable("chat", table => {
        table.increments('id').notNullable()
        table.integer('user_id', 255).unsigned().nullable()
        table.string('message', 255).notNullable()
        table.string('created_at', 255).notNullable()

        table.foreign('user_id').references('id').inTable('users')
    })
}

exports.down = async function(knex, Promise) {
    await knex.schema
    .dropTable("chat")
}