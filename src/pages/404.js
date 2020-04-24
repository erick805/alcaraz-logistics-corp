import React from "react"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
// Components
// import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  const intl = useIntl()

  return (
    // <Layout>
    <>
    <SEO 
      lang={intl.locale} 
      title={`404: ${intl.formatMessage({ id: "title" })}`}
    />
    <h1>
      <FormattedMessage id="notfound.header" />
    </h1>
    <p>
      <FormattedMessage id="notfound.description" />
    </p>
    </>
    // </Layout>
  )
}

export default NotFoundPage
