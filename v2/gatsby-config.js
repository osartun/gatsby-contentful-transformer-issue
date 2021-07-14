module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `h24281hbinui`,
        // I'm committing this access token because the whole Contentful space is just for demo purposes
        accessToken: `ZdSPxfr1rviVLH5SeVpcRKxaE4ebXr0liwiXisghrIk`,
      },
    },
    `gatsby-transformer-contentful-local`,
  ],
}
