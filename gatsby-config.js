module.exports = {
  siteMetadata: {
    siteUrl: 'https://au-vignoble.netlify.app',
    title: 'Au Vignoble'
  },
  plugins: [
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: '2544053186e34cef68c91c4fc770b7'
      }
    },
    'gatsby-plugin-styled-components'
  ]
}
