// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'db',
      user:     'root',
      password: 'password'
    },
    migrations: {
      directory: './app/database/migrations',
    },
    seeds: {
      directory: './app/database/seeds'
    }
  }

};



