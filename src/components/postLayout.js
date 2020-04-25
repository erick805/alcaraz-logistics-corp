import { Link, FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import React from 'react'
// import {graphql} from 'gatsby'

// Components
// import Layout from './layout'

/* Static Query can be used anywhere, does not accept variables, can't use context
   Page Query must be used on pages
*/

const PostLayout = ({ intl, data, path}) => {
    return (
        <>
        {/* <Layout location={path}> */}
        {/* <h1>{intl.formatMessage({ id: `${markdownRemark.frontmatter.title}` })}</h1>
        <div dangerouslySetInnerHTML={{__html: markdownRemark.html}}/> */}
        <Link to="/">
            <FormattedMessage id="Go back to the homepage" />
        </Link>
        {/* </Layout> */}
        </>
    )
}

PostLayout.propTypes = {

}

// export const query = graphql`
//   query PostQuery($slug: String!) {
//         markdownRemark(frontmatter: {
//         slug: {
//             eq: $slug
//         }
//         }) {
//         html
//         frontmatter {
//             title
//             date
//             slug
//         }
//         }
//     }  
// `
export default injectIntl(PostLayout)

