import React from 'react'
import Layout from '../components/layout'
import { Link, injectIntl } from 'gatsby-plugin-intl'

// CSS
import { NavButtonStyle } from './index'

const thanks = ({intl}) => {

  return (
    <Layout>
        <h1>Thank you!</h1>
        <p>We will get back to you shortly</p>
        <NavButtonStyle>
        <Link to="/">{intl.formatMessage({ id: "Go back to the homepage" })}</Link>
        </NavButtonStyle>
    </Layout>
  )
}

thanks.propTypes = {
    
}

export default injectIntl(thanks)