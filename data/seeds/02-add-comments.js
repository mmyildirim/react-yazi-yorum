exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("comment")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("comment").insert([
        {
          display_name: "Ayse",
          body: "Merhaba",
          post_id: 1,
        },
        {
          display_name: "İlayda",
          body: "Uygulama  cok zevkli.",
          post_id: 2,
        },
        
      ]);
    });
};
