/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('comments', function (table) {
        table.increments("id").primary();
        table.integer('post_id').references('id').inTable('posts')
        table.string('description').notNullable
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('comments')
};
