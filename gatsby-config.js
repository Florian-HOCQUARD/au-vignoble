require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

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
    {
      resolve: '@gatsby-contrib/gatsby-plugin-elasticlunr-search',
      options: {
        // Fields to index
        fields: ['title', 'tags', 'html'],
        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            tags: node => node.frontmatter.tags,
            path: node => node.frontmatter.path,
            html: node => node.internal.content
          }
        }
      }
    },
    'gatsby-plugin-styled-components'
  ]
}
