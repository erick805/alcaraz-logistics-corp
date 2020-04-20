import React from 'react'
import {graphql} from 'gatsby'

// Components
import Layout from './layout'
import Archive from './archive'

// Static Query can be used anywhere, does not accept variables, can't use context

// Page Query must be used on pages
const PostLayout = (props) => {
    const {markdownRemark} = props.data

    return (
        <>
        <Layout>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{__html: markdownRemark.html}}/>
        <Archive />
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

