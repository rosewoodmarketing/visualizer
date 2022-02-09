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
        short_name: `Finch Visualizer`,
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
    resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-50927707-2D",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: false,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
        // defaults to false
        enableWebVitalsTracking: true,
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
