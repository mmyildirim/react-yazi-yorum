exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("post")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("post").insert([
        {
          title: "Merhaba Hos Geldiniz",
          content:
            "React İle Yazdıgım Blog Uygulamama Ulastıgınız icin tesekkur ederiz.",
          // user_id: 1,
        },
        {
          title: "Adım Mustafa Yildirim",
          content:
            "Ben Bir Frontend Developer'ım,Bu uygulamadan Size Kucak Dolusu Selamlar Gönderiyorum.",
          // user_id: 1,
        }
       
      ]);
    });
};
