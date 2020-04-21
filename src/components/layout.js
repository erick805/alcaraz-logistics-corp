/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { Spring } from 'react-spring/renderprops'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

// Components

// CSS
import "./layout.css"

const MainLayout = styled.main`
  font-family: 'Quicksand', sans-serif;
  max-width: 50%;
  margin: 1rem auto;
  display: grid;
  grid-template-rows: auto;
  margin-left: 7rem;
  margin-top: 3rem;
`
const Layout = ({ children}) => {

  useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }

    }
  `)


  return (
    <>
      <MainLayout>
        <div>
          {children}
        </div>
      </MainLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

Layout.defaultProps = {
  location: {}
}

export default Layout
