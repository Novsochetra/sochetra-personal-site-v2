const blogs = [
  {
    title: "How To Allow Simulator FullScreen Mode",
    description: "I have create a simple ខ្លាឃ្លោក game by using javascript",
    thumbnails: ["/achievement/kla-klok-thumbnail-1.png"],
  },

  {
    title: "How To Publish App To Google Play Store",
    description: "I have create a simple ខ្លាឃ្លោក game by using javascript",
    thumbnails: ["/achievement/kla-klok-thumbnail-1.png"],
  },

  {
    title: "How To Prevent Glitch Screen Navigation Go Back",
    description: "I have create a simple ខ្លាឃ្លោក game by using javascript",
    thumbnails: ["/achievement/kla-klok-thumbnail-1.png"],
  },

  {
    title: "How To Download Facebook Video From Comment",
    description: "I have create a simple ខ្លាឃ្លោក game by using javascript",
    thumbnails: ["/achievement/kla-klok-thumbnail-1.png"],
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.json({ data: blogs });
};
