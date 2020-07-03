require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Finch Color Visualizer`,
    description: `You know you want Finch outdoor furniture, but in what colors? Use this visualizer to choose your colors`,
    author: `Finch`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Finch Visualizer`,
        short_name: `visualizer`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `#f5f2eb`,
        display: `fullscreen`,
        cache_busting_mode: 'none',
        icon: `src/images/finch-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: ['**/*.{js,jpg,png,html,css}']
        }
      },
    },
    {
      resolve: `gatsby-source-google-spreadsheet`,
      options:{
          spreadsheetId: '1Q5cd4qkpYxtwQF2EZsKSWvnLvdFRTlVTFdDd4ujiuRo',
          typePrefix: "GoogleSpreadsheet",
          credentials: require("./credentials/client_secret.json"),
        }
      }
  ],
}
