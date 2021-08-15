// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const achievements = [
  {
    title: "Game Development",
    data: [
      {
        title: "Kla Klok Game",
        description:
          "I have create a simple ខ្លាឃ្លោក game by using javascript",
        thumbnails: [],
      },
      {
        title: "Color Switcher",
        description: "This game is build base on unity game engine by using c#",
        thumbnails: ["/achievement/pop-star-thumbnail-1.png"],
      },
      {
        title: "Pop Star",
        description: "This game is build base on unity game engine by using c#",
        thumbnails: [],
      },
    ],
  },

  {
    title: "Mobile Development",
    data: [
      {
        title: "Instagram Clone",
        description: "The first personal React Native Project",
        thumbnails: [
          "https://raw.githubusercontent.com/Novsochetra/InstagramClone/master/screenshots/photo_2021-02-24%2014.33.30.jpeg",
          "https://github.com/Novsochetra/InstagramClone/blob/master/screenshots/photo_2021-02-24%2014.33.20.jpeg",
          "https://github.com/Novsochetra/InstagramClone/blob/master/screenshots/photo_2021-02-24%2014.33.25.jpeg",
          "https://github.com/Novsochetra/InstagramClone/blob/master/screenshots/photo_2021-02-24%2014.33.30.jpeg",
          "https://github.com/Novsochetra/InstagramClone/blob/master/screenshots/photo_2021-02-24%2014.33.34.jpeg",
        ],
      },
      {
        title: "Fashion App",
        description:
          "The E-Commerce React Native which is inspired from dribbble",
        thumbnails: [
          "https://github.com/Novsochetra/Fashion-App/raw/master/assets/demo.gif",
          "https://github.com/Novsochetra/Fashion-App/raw/master/assets/home-screen.png",
          "https://github.com/Novsochetra/Fashion-App/raw/master/assets/detail-screen.png",
          "https://github.com/Novsochetra/Fashion-App/raw/master/assets/cart-screen.png",
        ],
      },
      {
        title: "Book Share",
        description:
          "The UI book libaray for booking sharing which is inspired from dribbble",
        thumbnails: [
          "https://github.com/Novsochetra/Book-Share-App/raw/master/screen%20shots/Screen%20Shot%202020-06-01%20at%208.26.56%20PM.png",
          "https://raw.githubusercontent.com/Novsochetra/Book-Share-App/master/screen%20shots/Screen%20Shot%202020-06-01%20at%208.26.51%20PM.png",
          "https://raw.githubusercontent.com/Novsochetra/Book-Share-App/master/screen%20shots/Screen%20Shot%202020-06-01%20at%208.26.51%20PM.png",
        ],
      },
    ],
  },

  {
    title: "Web Development",
    data: [
      {
        title: "News Website",
        description:
          "The news websites which is build using Ruby on Rails (ROR)",
        thumbnails: [],
        productURL: "https://chong-deng.herokuapp.com",
      },

      {
        title: "Node JS Google Translate",
        description:
          "The translate node js app, which implement by using google translate api",
        thumbnails: ["/achievement/node-js-google-translate-thumbnail.png"],
        productURL:
          "https://node-google-translate-api.herokuapp.com/api/translates?q=other&from=en&to=km",
      },

      {
        title: "Rich JSON API",
        description: "The Node js for generate fake API",
        thumbnails: [
          "/achievement/rich-json-api-thumbnail-1.png",
          "/achievement/rich-json-api-thumbnail-2.png",
        ],
        productURL: "rich-json-api.herokuapp.com/api/posts",
      },
    ],
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.json({ data: achievements });
};
