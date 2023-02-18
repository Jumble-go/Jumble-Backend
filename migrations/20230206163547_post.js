/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('posts', function (table) {
        table.increments("id").primary();
        table.integer('user_id').references('id').inTable('users')
        table.string('image').notNullable();
        table.string('tittle').notNullable()
        table.string('description').notNullable()
        table.integer("price")
        table.dateTime("datetime").notNullable()
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('posts')
};
