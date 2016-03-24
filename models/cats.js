var Knex = require('knex')
var knexConfig = require('../knexfile')
var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

function all(){
  return knex.select().table('cats')
}


function findById(id){
  return knex('cats').whereRaw('id = "'+id+ '"')
}

module.exports = {
  all: all
}
