// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const achievements = [
  {
    title: "Game Development",
    data: [
      {
        title: "Kla Klok Game",
        description:
          "I have create a simple ខ្លាឃ្លោក game by using javascript",
        thumbnails: [
          "/achievement/kla-klok-thumbnail-1.png",
          "/achievement/kla-klok-thumbnail-2.png",
          "/achievement/kla-klok-thumbnail-3.png",
        ],
      },
      {
        title: "Color Switcher",
        description: "This game is build base on unity game engine by using c#",
        thumbnails: [
          "/achievement/color-switch-thumbnail-1.png",
          "/achievement/color-switch-thumbnail-2.png",
          "/achievement/color-switch-thumbnail-3.png",
          "/achievement/color-switch-thumbnail-4.png",
        ],
      },
      {
        title: "Pop Star",
        description: "This game is build base on unity game engine by using c#",
        thumbnails: [
          "/achievement/pop-star-thumbnail-1.png",
          "/achievement/pop-star-thumbnail-2.png",
          "/achievement/pop-star-thumbnail-2.png",
        ],
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
          "https://raw.githubusercontent.com/Novsochetra/InstagramClone/master/screenshots/photo_2021-02-24%2014.33.20.jpeg",
          "https://raw.githubusercontent.com/Novsochetra/InstagramClone/master/screenshots/photo_2021-02-24%2014.33.30.jpeg",
          "https://raw.githubusercontent.com/Novsochetra/InstagramClone/master/screenshots/photo_2021-02-24%2014.33.25.jpeg",
          "https://raw.githubusercontent.com/Novsochetra/InstagramClone/master/screenshots/photo_2021-02-24%2014.33.34.jpeg",
        ],
      },
      {
        title: "Fashion App",
        description:
          "The E-Commerce React Native which is inspired from dribbble",
        thumbnails: [
          "/achievement/fashion-app-thumbnail-2.png",
          "/achievement/fashion-app-thumbnail-1.png",
          "/achievement/fashion-app-thumbnail-3.png",
          "/achievement/fashion-app-thumbnail-3.png",
        ],
      },
      {
        title: "Book Share",
        description:
          "The UI book libaray for booking sharing which is inspired from dribbble",
        thumbnails: [
          "/achievement/book-share-thumbnail-1.png",
          "/achievement/book-share-thumbnail-2.png",
          "/achievement/book-share-thumbnail-3.png",
          "/achievement/book-share-thumbnail-4.png",
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
        thumbnails: [
          "/achievement/chong-deng-thumbnail-1.png",
          "/achievement/chong-deng-thumbnail-2.png",
          "/achievement/chong-deng-thumbnail-3.png",
        ],
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

  {
    title: "Other",
    data: [
      {
        title: "React Native Circular Chart",
        description:
          "It is my first React Native Library to publish on NPM packcage 🥰🥰",
        thumbnails: [
          "https://raw.githubusercontent.com/Novsochetra/react-native-circular-chart/main/assets/thumbnail.png",
          "/achievement/react-native-circular-char-thumbnail-1.png",
          "/achievement/react-native-circular-char-thumbnail-2.png",
        ],
        productURL: "https://chong-deng.herokuapp.com",
      },
    ],
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.json({ data: achievements });
};
