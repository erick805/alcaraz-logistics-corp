/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

 exports.createPages = ({graphql, actions}) => {
     const {createPage} = actions
     const postLayoutTemplate = path.resolve('./src/components/postLayout.js')

     return graphql(`
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
     `).then(results => {
         if (results.errors) {
             throw results.errors
         }
         results.data.allMarkdownRemark.edges.forEach(({node}) => {
             createPage({
                 path: node.frontmatter.slug,
                 component: postLayoutTemplate,
                 context: {
                     slug: node.frontmatter.slug
                 }
             })
         })
     })
 }


