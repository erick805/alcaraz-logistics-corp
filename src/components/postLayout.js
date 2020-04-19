import React from 'react'
import {graphql} from 'gatsby'
import Layout from './layout'

// Static Query can be used anywhere, does not accept variables, can't use context

// Page Query must be used on pages
const PostLayout = () => {
    

    return (
        <>
        <Layout>
        <h1>Post Layout</h1>
        </Layout>
        </>
    )
}

PostLayout.propTypes = {

}

export const query = graphql`
    query PostQuery {
        markdownRemark(frontmatter: {
        slug: {
            eq: "/third-post"
        }
        }) {
        html 
        frontmatter {
            title
            date
            slug
        }
        }
    }  
`
export default PostLayout

