const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Posts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
        path: '/palavras/' + node.frontmatter.slug,
        component: path.resolve('./src/templates/post-details.tsx'),
        context: { slug: node.frontmatter.slug }
    })
    console.log(node)
    
  });
}
