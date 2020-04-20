import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Logo from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Logo/>
    <SEO title="Home" />
    <h1>Alcaraz Logistics Corporation</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
