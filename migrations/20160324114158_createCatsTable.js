
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cats', function(table){
    table.increments()
    table.string('name')
    table.string('lifestory')
    table.string('imageURL')
    table.integer('lives')
})

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cats')


};
