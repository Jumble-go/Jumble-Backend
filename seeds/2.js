/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert([
    {user_id: 1, image: "https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026540&id=1704264&recipeId=729", tittle:"Grey couch", description:"Grey 80inch couch", price: 430 },
    {user_id: 2, image: "https://cdn.shopify.com/s/files/1/0124/5662/4187/files/sd-nav-final.jpg?v=1613277558", tittle:"white desck", description:"White steal cage table", price: 175},
    {user_id: 3, image: "https://i.pinimg.com/736x/b5/33/01/b53301898b66cc6950e8dfa995df3e8f.jpg", tittle:"Drink Stand", description:"brand new stand, bearly used.", price: 120},
  
  ]);
};
