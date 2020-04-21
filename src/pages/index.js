/* eslint-disable import/first */
const typeface = require("typeface-open-sans")

import React from "react"
import { Link } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

// Assets
import Logo from "../components/nonStretchedLogo"

export const NavButton = styled.button`
  background: "white";
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #5ce1e6;
  border-radius: 3px;
`;

const IndexPage = ({location}) => (
  <Layout location={location} >
    <Logo/>
    <SEO title="Home" />
    <h1>Alcaraz Logistics Corporation</h1>
    <NavButton primary>
      <Link to="/about/" >About US</Link>
    </NavButton>
  </Layout>
)

export default IndexPage
