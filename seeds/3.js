/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE TABLE comments RESTART IDENTITY CASCADE')
  await knex('comments').insert([
    {user_id: 1, post_id: 1, description: "Hey is this still avelable?", datetime: "2023-01-10 19:23:23"},
    {user_id: 2, post_id: 2, description: "This brand is good?", datetime: "2023-01-10 19:23:23"},
    {user_id: 3, post_id: 3, description: "I had this one before.", datetime: "2023-01-10 19:23:23"},
    {user_id: 4, post_id: 4, description: "I had this one before.", datetime: "2023-01-10 19:23:23"},
    {user_id: 5, post_id: 5, description: "I had this one before.", datetime: "2023-01-10 19:23:23"},
    {user_id: 6, post_id: 6, description: "I had this one before.", datetime: "2023-01-10 19:23:23"},
    {user_id: 7, post_id: 7, description: "I had this one before.", datetime: "2023-01-10 19:23:23"},
    {user_id: 8, post_id: 8, description: "I had this one before.", datetime: "2023-01-10 19:23:23"},
    {user_id: 9, post_id: 9, description: "I had this one before.", datetime: "2023-01-10 19:23:23"},
    {user_id: 10, post_id: 10, description: "I had this one before.", datetime: "2023-01-10 19:23:23"},
  ]);
};

