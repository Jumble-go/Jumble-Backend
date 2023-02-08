/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert([
    {post_id: 1, description: "Hey is this still avelable?"},
    {post_id: 2, description: "This brand is good?"},
    {post_id: 3, description: "I had this one before."},


    {}
  ]);
};
