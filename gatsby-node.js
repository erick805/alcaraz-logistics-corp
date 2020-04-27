/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

 exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions
     
  const result = await graphql(`
    query blogSlugsQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const postLayoutTemplate = path.resolve('./src/components/postLayout.js')

  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    createPage({
      path: `${node.frontmatter.slug}`,
      component: postLayoutTemplate,
      context: {
        slug: node.frontmatter.slug
      }
    })
  })
}


