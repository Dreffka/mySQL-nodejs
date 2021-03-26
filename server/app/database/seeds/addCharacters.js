const fetch = require('node-fetch')

// const getCharactersFromApi = async () => {
//   const res = await fetch(
//     'https://rickandmortyapi.com/api/character'
//   ).results
//   const characters = await res.json()
//   this.characters = characters.data
// }


  fetch('https://rickandmortyapi.com/api/character')
  .then(res => res.json())
  .then(json => console.log(json));



exports.seed = async function(knex, Promise) {

  // const characters = []
  const chunkSize = 50
    
  // characters.push(getCharactersFromApi())


  // await knex
  // .batchInsert("characters", characters, chunkSize)
}