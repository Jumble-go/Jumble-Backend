/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE TABLE messages RESTART IDENTITY CASCADE')
  await knex('messages').insert([
    {sender_id: 1, reciver_id: 2, text:"Hello is this aveliable", datetime: "2023-01-10 19:23:23"},
    {sender_id: 2, reciver_id: 3, text: "I can pick it up this week",datetime: "2023-01-10 19:23:23" }

  ]);
};
