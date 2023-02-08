/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('messages').del()
  await knex('messages').insert([
    {sender_id: 1, reciver_id: 2, text:"Hello is this aveliable"},
    {sender_id: 2, reciver_id: 3, text: "I can pick it up this week" }

  ]);
};
