const { ACCESS_TOKEN, SPACE_ID, DETERMINISTIC } = process.env;

// TODO: Automatic

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-neon`,
      options: {
        accessToken: ACCESS_TOKEN,
        spaceId: SPACE_ID,
        deterministic: !!DETERMINISTIC,
      },
    },
  ],
};
