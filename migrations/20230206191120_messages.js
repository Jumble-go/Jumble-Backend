/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('messages', function (table) {
        table.increments("id").primary();
        table.integer('sender_id').references('id').inTable('users')
        table.integer('reciver_id').references('id').inTable('users')
        table.string('text').notNullable()
        table.dateTime("datetime").notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('messages')
  
};
