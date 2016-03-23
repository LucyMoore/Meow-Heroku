
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('cats').del(),

    // Inserts seed entries
    knex('cats').insert({id: 1, name: 'flurrffy', lifestory: 'such fluff', imageURL: 'example', lives: 10}),
    knex('cats').insert({id: 2, name: 'twitch', lifestory: 'can i have some more coffee', imageURL: 'example', lives: 10}),
    knex('cats').insert({id: 3, name: 'piet', lifestory: 'i like to watch you sleep', imageURL: 'example', lives: 10})
  );
};
