import { Link, FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import React from 'react'

// Components
import Layout from './layout'

// CSS
import { NavButtonStyle } from '../pages/index'

/* Static Query can be used anywhere, does not accept variables, can't use context
   Page Query must be used on pages
*/

const about_us = ({ intl, data, path}) => {

    return (
      <Layout location={path}>
        <h1>{intl.formatMessage({ id: "about.title" })}</h1>
        <h3>
            <FormattedMessage id="about.who.title" />
        </h3>
        <p>
            <FormattedMessage id="about.who.p" />
        </p>
        <h3>
            <FormattedMessage id="about.what.title" />
        </h3>
        <p>
            <FormattedMessage id="about.what.description" />
        </p>
        <ol>
            <li>
              <FormattedMessage id="about.what.li.1" />
            </li>
            <li>
              <FormattedMessage id="about.what.li.2" />
            </li>
            <li>
              <FormattedMessage id="about.what.li.3" />
            </li>
            <li>
              <FormattedMessage id="about.what.li.4" />
            </li>
            <li>
              <FormattedMessage id="about.what.li.5" />
            </li>
        </ol>
        <NavButtonStyle>
          <Link to="/">
            <FormattedMessage id="Go back to the homepage" />
          </Link>
        </NavButtonStyle>
      </Layout> 
    )
}

about_us.propTypes = {

}

export default injectIntl(about_us)