import React from "react"
import { Link } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"

// Assets
import Logo from "../components/image"

const IndexPage = () => (
  <Layout>
    <Logo/>
    <SEO title="Home" />
    <h1>Alcaraz Logistics Corporation</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
