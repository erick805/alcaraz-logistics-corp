import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Archive = () => {
  const blogPosts = useStaticQuery(graphql`
  query BlogPostArchive {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
  `)

  return (
    <>
        <aside>
            <h3>Archive</h3>
            {blogPosts.allMarkdownRemark.edges.map(edge => (
                <li>
                    {edge.node.frontmatter.title}
                </li>
            ))}
        </aside>
    </>
  )
}

export default Archive

