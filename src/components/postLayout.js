import { Link } from 'gatsby'
import React from 'react'
import {graphql} from 'gatsby'

// Components
import Layout from './layout'

/* Static Query can be used anywhere, does not accept variables, can't use context
   Page Query must be used on pages
*/

const PostLayout = ({data, path}) => {
    const {markdownRemark} = data

    return (
        <>
        <Layout location={path}>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{__html: markdownRemark.html}}/>
        <Link to="/">Go back to the homepage</Link>
        </Layout>
        </>
    )
}

PostLayout.propTypes = {

}

export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(frontmatter: {
        slug: {
            eq: $slug
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

