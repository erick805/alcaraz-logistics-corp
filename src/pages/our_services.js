import { Link, FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import React from 'react'
// import { graphql } from 'gatsby'

// Components
import Layout from '../components/layout'

/* Static Query can be used anywhere, does not accept variables, can't use context
   Page Query must be used on pages
*/

const our_services = ({ intl, data, path}) => {
    // const { markdownRemark } = data
    console.log("local", intl.locale)

    return (
      <Layout location={path}>
        <h1>{intl.formatMessage({ id: "services.title" })}</h1>
        <h3>
            <FormattedMessage id="services.research.title" />
        </h3>
        <p>
            <FormattedMessage id="services.research.p" />
        </p>
        <h3>
            <FormattedMessage id="services.delivery-country.title" />
        </h3>
        <p>
            <FormattedMessage id="services.delivery-country.p" />
        </p>
        <h3>
            <FormattedMessage id="services.delivery-destination.title" />
        </h3>
        <p>
            <FormattedMessage id="services.delivery-destination.p" />
        </p>
        <h3>
            <FormattedMessage id="services.delivery-destination-customs.title" />
        </h3>
        <p>
            <FormattedMessage id="services.delivery-destination-customs.p" />
        </p>
        <h3>
            <FormattedMessage id="services.door-to-door.title" />
        </h3>
        <p>
            <FormattedMessage id="services.door-to-door.p" />
        </p>
        <Link to="/">
            <FormattedMessage id="Go back to the homepage" />
        </Link>
      </Layout> 
    )
}

our_services.propTypes = {

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
export default injectIntl(our_services)