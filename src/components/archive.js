import React from "react"
// import { useStaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'

const PostStyle = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  background: pink;
  font-size: 0.8rem;
  text-decoration: underline;
  a {
      color: #000;
      text-decoration: none;
  }
  h2 {
      margin-bottom: 0
  }
  p {
      font-size: 0.8rem;
  }
`

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`
const Archive = () => {
  // const blogPosts = useStaticQuery(graphql`
  // query BlogPostArchive {
  //   allMarkdownRemark(limit: 5, sort: {
  //       order: DESC
  //       fields: [frontmatter___date]
  //   }) {
  //     edges {
  //       node {
  //         frontmatter {
  //           title
  //           slug
  //         }
  //       }
  //     }
  //   }
  // }
  // `)

  return (
    <>
        <aside>
            <h3>Archive</h3>
            <ArchiveList>
            {blogPosts.allMarkdownRemark.edges.map(edge => (
                <li key={edge.node.frontmatter.slug}>
                  <PostStyle>
                    <Link  to={`/posts${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</Link>
                    </PostStyle>
                </li>
            ))}
            </ArchiveList>
        </aside>
    </>
  )
}

export default Archive

