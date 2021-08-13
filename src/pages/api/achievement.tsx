// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { CardProps } from "../../components/Card";

const skill = [
  {
    title: "Book Share App",
    thumbnails: [
      "https://github.com/Novsochetra/Book-Share-App/raw/master/screen%20shots/Screen%20Shot%202020-06-01%20at%208.26.56%20PM.png",
      "https://raw.githubusercontent.com/Novsochetra/Book-Share-App/master/screen%20shots/Screen%20Shot%202020-06-01%20at%208.26.51%20PM.png",
      "https://raw.githubusercontent.com/Novsochetra/Book-Share-App/master/screen%20shots/Screen%20Shot%202020-06-01%20at%208.26.51%20PM.png",
    ],

    source: "https://github.com/Novsochetra/Book-Share-App",
  },

  {
    title: "Fashion App",
    thumbnails: [
      "https://github.com/Novsochetra/Fashion-App/raw/master/assets/demo.gif",
      "https://github.com/Novsochetra/Fashion-App/raw/master/assets/home-screen.png",
      "https://github.com/Novsochetra/Fashion-App/raw/master/assets/detail-screen.png",
      "https://github.com/Novsochetra/Fashion-App/raw/master/assets/cart-screen.png",
    ],

    source: "https://github.com/Novsochetra/Fashion-App",
  },
  {
    title: "Instagram Clone",
    thumbnails: [
      "https://github.com/Novsochetra/InstagramClone/blob/master/screenshots/photo_2021-02-24%2014.33.20.jpeg",
      "https://github.com/Novsochetra/InstagramClone/blob/master/screenshots/photo_2021-02-24%2014.33.25.jpeg",
      "https://github.com/Novsochetra/InstagramClone/blob/master/screenshots/photo_2021-02-24%2014.33.30.jpeg",
      "https://github.com/Novsochetra/InstagramClone/blob/master/screenshots/photo_2021-02-24%2014.33.34.jpeg",
    ],

    source: "https://github.com/Novsochetra/InstagramClone",
  },

  {
    title: "Node JS Google Translate",
    thumbnails: [],

    source: "https://github.com/Novsochetra/NodeJsGoogleTranslateAPI",
    productURL:
      "https://node-google-translate-api.herokuapp.com/api/translates?q=other&from=en&to=km",
  },

  {
    title: "Json API",
    thumbnails: [],

    source: "https://github.com/Novsochetra/FakeApiGenerator",
    productURL: "rich-json-api.herokuapp.com/api/posts",
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.json({ data: skill });
};
