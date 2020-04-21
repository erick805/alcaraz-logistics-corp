/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Spring } from 'react-spring/renderprops'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

// Components

// CSS
import "./layout.css"

const MainLayout = styled.main`
  font-family: 'Quicksand', sans-serif;
  max-width: 90%;
  margin: 1rem auto;
  // display: grid;
  // grid-template-columns: 3fr 1fr;
  // grid-gap: 40px;
`
const Layout = ({ children, location }) => {

  const data = useStaticQuery(graphql`
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
      {/* <Spring
         from={{height: location.pathname === '/' ? 100 : 200 }}
         to={{height: location.pathname === '/' ? 200 : 100 }}
      >
        {styles => (
          <div style={{overflow: 'hidden', ...styles}}>
          </div>
        )}
      </Spring> */}
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
