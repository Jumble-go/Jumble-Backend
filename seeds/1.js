/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {username: "Richard1", password: "drlover", avatar : 'https://www.premiergourmet.com/media/catalog/product/cache/3c6e98d54f3ab8ad5f43937b1774c6b4/G/U/GUEST_3e858bfb_faf5_4374_b11a_578872483b0f_a220.jpg'},
    {username: "Roger3x3", password: "ecualover1", avatar : "https://i.pinimg.com/736x/a4/0d/45/a40d4564604994d3fe4b84ae548570cd.jpg"},
    {username: "luis95", password: "Germa66", avatar: "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg" }

  ]);
};
